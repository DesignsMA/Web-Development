export const TABLES = {
  empleados: {
    pk: ["no_emp"],
    fields: [
      { name: "no_emp", type: "number" },
      { name: "nombre_emp", type: "text" },
    ],
  },

  gerentes: {
    pk: ["no_gerente"],
    fields: [
      { name: "no_gerente", type: "number" },
      { name: "nombre_gerente", type: "text" },
    ],
  },
  departamentos: {
    pk: ["num_depto"],
    fields: [
      { name: "num_depto", type: "number" },
      { name: "nombre_depto", type: "text" },
    ],
  },
  proyectos: {
    pk: ["num_proyecto"],
    fields: [
      { name: "num_proyecto", type: "number" },
      { name: "nombre_proyecto", type: "text" },
    ],
  },
  asignaciones: {
    pk: ["no_emp", "num_proyecto"],
    fields: [
      { name: "no_emp", type: "number" },
      { name: "num_proyecto", type: "number" },
      { name: "fecha_inicio", type: "date" },
      { name: "pagoxhr", type: "number" },
    ],
  },
} as const;