import { NextResponse } from "next/server";

/**
 * Handler being used from uptime monitor in order to prevent supabase from pausing the database 
 */
export async function GET() {
  return NextResponse.json({ status: "ok" }, { status: 200 });
}
