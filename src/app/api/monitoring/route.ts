import { NextResponse } from "next/server";

/**
 * Handler being used from uptime monitor in order to prevent supabase from pausing the database 
 */
export async function HEAD() {
  return NextResponse.json({ status: "ok" }, { status: 200 });
}
