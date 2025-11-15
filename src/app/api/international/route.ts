import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "lib",
  "data",
  "international-packages.json"
);

export async function GET() {
  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const packages = JSON.parse(jsonData);
    return NextResponse.json(packages);
  } catch (error) {
    console.error("❌ Error reading international-packages.json:", error);
    return NextResponse.json(
      { message: "Error reading international packages" },
      { status: 500 }
    );
  }
}

