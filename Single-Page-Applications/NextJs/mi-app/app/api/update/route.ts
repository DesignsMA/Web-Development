import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { TABLES } from "@/lib/tables";

export async function POST(req: NextRequest) {
  const { table, pk, data } = await req.json();

  if (!table || !TABLES[table as keyof typeof TABLES]) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  const config = TABLES[table as keyof typeof TABLES];

  const setClauses = config.fields
    .filter((f) => !config.pk.includes(f.name as never))
    .map((f) => `${f.name} = ?`);

  const setValues = config.fields
    .filter((f) => !config.pk.includes(f.name as never))
    .map((f) => data[f.name] ?? null);

  const whereClauses = config.pk.map((k) => `${k} = ?`);
  const whereValues = config.pk.map((k) => pk[k]);

  if (setClauses.length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  try {
    await pool.execute(
      `UPDATE ${table} SET ${setClauses.join(", ")} WHERE ${whereClauses.join(" AND ")}`,
      [...setValues, ...whereValues]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
