import { exec as _exec } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";
import fs from "node:fs/promises";

const exec = promisify(_exec);

export type Converted = { original: string; pdf: string };

/**
 * If file is DOC/DOCX/PPT/PPTX/etc, converts to PDF using LibreOffice headless.
 * If already a PDF, returns a copy/path in outDir.
 * NOTE: Ensure `soffice` is present in PATH on the server/container.
 */
export async function ensurePdf(inputPath: string, outDir: string): Promise<Converted> {
  const ext = path.extname(inputPath).toLowerCase();
  await fs.mkdir(outDir, { recursive: true });

  if (ext === ".pdf") {
    const base = path.basename(inputPath);
    const target = path.join(outDir, base);
    if (inputPath !== target) await fs.copyFile(inputPath, target);
    return { original: inputPath, pdf: target };
  }

  if ([".docx", ".doc", ".pptx", ".ppt", ".odt", ".odp"].includes(ext)) {
    // Convert to PDF in outDir
    await exec(`soffice --headless --convert-to pdf --outdir ${outDir} ${JSON.stringify(inputPath)}`);
    const pdfBase = path.basename(inputPath, ext) + ".pdf";
    const pdfPath = path.join(outDir, pdfBase);
    return { original: inputPath, pdf: pdfPath };
  }

  throw new Error(`Unsupported file type: ${ext}`);
}

