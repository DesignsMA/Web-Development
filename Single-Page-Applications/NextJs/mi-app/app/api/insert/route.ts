import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { TABLES } from "@/lib/tables";

export async function POST(req: NextRequest) {
  const { table, data } = await req.json();

  if (!table || !TABLES[table as keyof typeof TABLES]) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  const config = TABLES[table as keyof typeof TABLES];

  const fields = config.fields.map((f) => f.name);
  const values = fields.map((f) => data[f] ?? null);

  const placeholders = fields.map(() => "?").join(",");

  try {
    await pool.execute(
      `INSERT INTO ${table} (${fields.join(",")}) VALUES (${placeholders})`,
      values
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Insert failed" }, { status: 500 });
  }
}