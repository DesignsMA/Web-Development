import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

/* ─────────────────────────────────────────────────────────────
   Catálogo de consultas especiales
   Cada query puede tener params opcionales que el cliente envía.
───────────────────────────────────────────────────────────── */

type QueryDef = {
  label: string;
  description: string;
  category: "joins" | "agrupaciones" | "filtros";
  params?: { name: string; label: string; type: "text" | "date" }[];
  build: (p: Record<string, string>) => { sql: string; values: any[] };
};

export const QUERIES: Record<string, QueryDef> = {

  /* ── JOINS ── */
  empleados_con_proyectos: {
    label: "Empleados con proyectos",
    description: "Muestra cada empleado junto con el proyecto asignado, fecha de inicio y pago/hr.",
    category: "joins",
    build: () => ({
      sql: `
        SELECT e.no_emp, e.nombre_emp,
               p.num_proyecto, p.nombre_proyecto,
               a.fecha_inicio, a.pagoxhr
        FROM asignaciones a
        JOIN empleados  e ON a.no_emp       = e.no_emp
        JOIN proyectos  p ON a.num_proyecto = p.num_proyecto
        ORDER BY e.nombre_emp
      `,
      values: [],
    }),
  },

  empleados_sin_proyectos: {
    label: "Empleados sin proyectos",
    description: "Lista de empleados que no tienen ninguna asignación activa.",
    category: "joins",
    build: () => ({
      sql: `
        SELECT e.no_emp, e.nombre_emp
        FROM empleados e
        LEFT JOIN asignaciones a ON e.no_emp = a.no_emp
        WHERE a.no_emp IS NULL
        ORDER BY e.nombre_emp
      `,
      values: [],
    }),
  },

  pago_total_por_proyecto: {
    label: "Pago total por proyecto",
    description: "Suma del pagoxhr de todos los empleados agrupado por proyecto, ordenado descendente.",
    category: "joins",
    build: () => ({
      sql: `
        SELECT p.nombre_proyecto,
               SUM(a.pagoxhr) AS total_pagoxhr
        FROM asignaciones a
        JOIN proyectos p ON a.num_proyecto = p.num_proyecto
        GROUP BY p.nombre_proyecto
        ORDER BY total_pagoxhr DESC
      `,
      values: [],
    }),
  },

  top5_pago_hora: {
    label: "Top 5 mayor pago/hr",
    description: "Los 5 empleados con el pago por hora más alto en cualquier proyecto.",
    category: "joins",
    build: () => ({
      sql: `
        SELECT e.nombre_emp, a.pagoxhr, p.nombre_proyecto
        FROM asignaciones a
        JOIN empleados e ON a.no_emp       = e.no_emp
        JOIN proyectos p ON a.num_proyecto = p.num_proyecto
        ORDER BY a.pagoxhr DESC
        LIMIT 5
      `,
      values: [],
    }),
  },

  /* ── AGRUPACIONES ── */
  empleados_por_proyecto: {
    label: "Empleados por proyecto",
    description: "Cuántos empleados tiene asignados cada proyecto.",
    category: "agrupaciones",
    build: () => ({
      sql: `
        SELECT p.nombre_proyecto,
               COUNT(a.no_emp) AS total_empleados
        FROM proyectos p
        JOIN asignaciones a ON p.num_proyecto = a.num_proyecto
        GROUP BY p.nombre_proyecto
        ORDER BY total_empleados DESC
      `,
      values: [],
    }),
  },

  proyectos_por_empleado: {
    label: "Proyectos por empleado",
    description: "Cuántos proyectos tiene asignados cada empleado, incluyendo los que tienen cero.",
    category: "agrupaciones",
    build: () => ({
      sql: `
        SELECT e.nombre_emp,
               COUNT(a.num_proyecto) AS total_proyectos
        FROM empleados e
        LEFT JOIN asignaciones a ON e.no_emp = a.no_emp
        GROUP BY e.nombre_emp
        ORDER BY total_proyectos DESC
      `,
      values: [],
    }),
  },

  proyectos_sin_empleados: {
    label: "Proyectos sin empleados",
    description: "Proyectos que no tienen ningún empleado asignado.",
    category: "agrupaciones",
    build: () => ({
      sql: `
        SELECT p.nombre_proyecto,
               COUNT(a.no_emp) AS total_empleados
        FROM proyectos p
        LEFT JOIN asignaciones a ON p.num_proyecto = a.num_proyecto
        GROUP BY p.nombre_proyecto
        HAVING COUNT(a.no_emp) = 0
      `,
      values: [],
    }),
  },

  /* ── FILTROS ESPECIALES ── */
  asignaciones_por_rango: {
    label: "Asignaciones por rango de fechas",
    description: "Filtra asignaciones cuya fecha_inicio esté dentro del rango indicado.",
    category: "filtros",
    params: [
      { name: "desde", label: "Fecha desde", type: "date" },
      { name: "hasta", label: "Fecha hasta", type: "date" },
    ],
    build: (p) => ({
      sql: `
        SELECT e.nombre_emp, p.nombre_proyecto,
               a.fecha_inicio, a.pagoxhr
        FROM asignaciones a
        JOIN empleados e ON a.no_emp       = e.no_emp
        JOIN proyectos p ON a.num_proyecto = p.num_proyecto
        WHERE a.fecha_inicio BETWEEN ? AND ?
        ORDER BY a.fecha_inicio
      `,
      values: [p.desde ?? "1900-01-01", p.hasta ?? "2100-12-31"],
    }),
  },
};

/* ─────────────────────────────────────────────────────────────
   GET /api/query?id=<queryId>[&param=value…]
   GET /api/query          → devuelve el catálogo (sin sql)
───────────────────────────────────────────────────────────── */
export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  /* sin id → catálogo */
  if (!id) {
    const catalog = Object.entries(QUERIES).map(([key, q]) => ({
      id: key,
      label: q.label,
      description: q.description,
      category: q.category,
      params: q.params ?? [],
    }));
    return NextResponse.json(catalog);
  }

  const def = QUERIES[id];
  if (!def) {
    return NextResponse.json({ error: "Query no encontrada" }, { status: 404 });
  }

  /* recoger params del querystring */
  const userParams: Record<string, string> = {};
  (def.params ?? []).forEach((p) => {
    const v = req.nextUrl.searchParams.get(p.name);
    if (v) userParams[p.name] = v;
  });

  try {
    const { sql, values } = def.build(userParams);
    const [rows] = await pool.query(sql, values);
    return NextResponse.json(rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al ejecutar consulta" }, { status: 500 });
  }
}
