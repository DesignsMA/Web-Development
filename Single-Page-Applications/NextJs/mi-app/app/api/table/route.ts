import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { TABLES } from "@/lib/tables";

export async function GET(req: NextRequest) {
  const table = req.nextUrl.searchParams.get("table");

  if (!table || !TABLES[table as keyof typeof TABLES]) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  const config = TABLES[table as keyof typeof TABLES];
  const params = req.nextUrl.searchParams;
  const conditions: string[] = [];
  const values: any[] = [];

  config.fields.forEach((f) => {
    const field = f.name;

    // Rango de fechas: campo__desde / campo__hasta
    const desde = params.get(`${field}__desde`);
    const hasta = params.get(`${field}__hasta`);
    if (desde && hasta) {
      conditions.push(`${field} BETWEEN ? AND ?`);
      values.push(desde, hasta);
      return;
    }
    if (desde) {
      conditions.push(`${field} >= ?`);
      values.push(desde);
      return;
    }
    if (hasta) {
      conditions.push(`${field} <= ?`);
      values.push(hasta);
      return;
    }

    // Filtro normal (LIKE para texto, = para número)
    const value = params.get(field);
    if (value) {
      if (isNaN(Number(value))) {
        conditions.push(`${field} LIKE ?`);
        values.push(`%${value}%`);
      } else {
        conditions.push(`${field} = ?`);
        values.push(value);
      }
    }
  });

  let query = `SELECT * FROM ${table}`;
  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  try {
    const [rows] = await pool.query(query, values);
    return NextResponse.json(rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}
