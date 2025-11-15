import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "lib", "data", "packages.json");

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const pkg = data.find((p: any) => p.slug === slug);

    if (!pkg) {
      return NextResponse.json(
        { message: "Package not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(pkg);
  } catch (error) {
    console.error("❌ Error fetching package:", error);
    return NextResponse.json(
      { message: "Error fetching package" },
      { status: 500 }
    );
  }
}

