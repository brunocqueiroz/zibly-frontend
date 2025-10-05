import { NextRequest, NextResponse } from "next/server";
import path from "node:path";
import fs from "node:fs/promises";
import { ensurePdf } from "@/server/convert";

/**
 * DEV NOTE:
 * For a simple local demo, we write converted PDFs to /public/previews and serve them statically.
 * In production, prefer uploading to object storage (S3/GCS) and returning signed URLs instead.
 */
const PREVIEW_DIR = path.join(process.cwd(), "public", "previews");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    /**
     * Expected body.files: Array<{
     *   id: string;              // Example id (e.g., "redline")
     *   title: string;           // Human title
     *   pathOnDisk: string;      // Absolute path on server (ingested/uploaded)
     *   publicDownloadUrl?: string; // Optional original file public URL
     * }>
     */
    const files = body.files ?? [];
    await fs.mkdir(PREVIEW_DIR, { recursive: true });

    const manifests = [] as any[];
    for (const f of files) {
      const { pdf } = await ensurePdf(f.pathOnDisk, PREVIEW_DIR);
      const pdfName = path.basename(pdf);
      const pdfUrl = `/previews/${encodeURIComponent(pdfName)}`; // served by Next from /public

      manifests.push({
        id: f.id,
        title: f.title,
        type: "pdf" as const,
        download: f.publicDownloadUrl ?? pdfUrl,
        preview: { pdfUrl },
      });
    }

    return NextResponse.json({ manifests });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Unknown error" }, { status: 500 });
  }
}

