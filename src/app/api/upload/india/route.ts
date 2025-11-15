import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { existsSync } from "fs";
import cloudinary from "@/lib/config/cloudinary";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create temp directory if it doesn't exist
    const tempDir = path.join(process.cwd(), "temp");
    if (!existsSync(tempDir)) {
      await mkdir(tempDir, { recursive: true });
    }

    // Save file temporarily
    const tempFilePath = path.join(tempDir, file.name);
    await writeFile(tempFilePath, buffer);

    // Upload to Cloudinary with india-travel folder
    const result = await cloudinary.uploader.upload(tempFilePath, {
      folder: "india-travel",
    });

    // Delete temp file
    const fs = require("fs");
    fs.unlinkSync(tempFilePath);

    return NextResponse.json({
      success: true,
      folder: "india-travel",
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    console.error("Upload failed (india):", err);
    return NextResponse.json(
      { success: false, message: "Upload failed" },
      { status: 500 }
    );
  }
}

