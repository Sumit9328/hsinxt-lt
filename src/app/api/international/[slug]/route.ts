import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "lib",
  "data",
  "international-packages.json"
);

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const packages = JSON.parse(jsonData);
    const pkg = packages.find((p: any) => p.slug === slug);

    if (!pkg) {
      return NextResponse.json(
        { message: "International package not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(pkg);
  } catch (error) {
    console.error("❌ Error fetching international package:", error);
    return NextResponse.json(
      { message: "Error fetching international package" },
      { status: 500 }
    );
  }
}

