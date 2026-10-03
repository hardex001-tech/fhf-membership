import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Check size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File exceeds 5MB size limit" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Try saving to local public/uploads directory
    try {
      const ext = path.extname(file.name) || ".jpg";
      const cleanExt = ext.replace(/[^a-zA-Z0-9.]/g, "").toLowerCase();
      const safeName = `fhf_${Date.now()}_${Math.random().toString(36).substring(2, 9)}${cleanExt}`;

      const uploadDir = path.join(process.cwd(), "public", "uploads");
      await mkdir(uploadDir, { recursive: true });
      const filePath = path.join(uploadDir, safeName);

      await writeFile(filePath, buffer);

      return NextResponse.json({
        success: true,
        url: `/uploads/${safeName}`,
        fileName: file.name,
        fileSize: file.size,
      });
    } catch (fsErr) {
      // Serverless (Netlify / Vercel read-only filesystem) fallback:
      // Return high-fidelity Base64 Data URL so the photo renders and persists with zero cloud storage costs
      console.warn("Serverless read-only filesystem detected, falling back to base64 data URI:", fsErr);
      const base64 = buffer.toString("base64");
      const mime = file.type || "image/jpeg";
      const dataUrl = `data:${mime};base64,${base64}`;

      return NextResponse.json({
        success: true,
        url: dataUrl,
        fileName: file.name,
        fileSize: file.size,
      });
    }
  } catch (err: any) {
    console.error("File upload error:", err);
    return NextResponse.json(
      { error: "Failed to upload file. Please try again." },
      { status: 500 }
    );
  }
}
