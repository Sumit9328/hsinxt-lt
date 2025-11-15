import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "lib", "data", "packages.json");

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Error reading travel packages:", error);
    return NextResponse.json(
      { message: "Error reading package data" },
      { status: 500 }
    );
  }
}

