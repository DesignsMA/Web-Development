import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { TABLES } from "@/lib/tables";

export async function POST(req: NextRequest) {
  const { table, pk } = await req.json();

  if (!table || !TABLES[table as keyof typeof TABLES]) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  const config = TABLES[table as keyof typeof TABLES];

  const where = config.pk.map((k) => `${k} = ?`).join(" AND ");
  const values = config.pk.map((k) => pk[k]);

  try {
    await pool.execute(`DELETE FROM ${table} WHERE ${where}`, values);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}