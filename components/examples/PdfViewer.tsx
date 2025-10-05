"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function PdfViewer({ url }: { url: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [page, setPage] = React.useState(1);
  const [numPages, setNumPages] = React.useState<number>(1);
  const [loading, setLoading] = React.useState(true);
  const docRef = React.useRef<any>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      const pdfjs = await import("pdfjs-dist");
      const worker = await import("pdfjs-dist/build/pdf.worker.mjs");
      // Next/webpack typically expose the worker URL on .default
      // @ts-ignore
      pdfjs.GlobalWorkerOptions.workerSrc = (worker as any).default ?? worker;

      const doc = await pdfjs.getDocument({ url }).promise;
      if (cancelled) return;
      docRef.current = doc;
      setNumPages(doc.numPages);
      await renderPage(1);
    }

    async function renderPage(p: number) {
      const doc = docRef.current;
      const pageObj = await doc.getPage(p);
      const viewport = pageObj.getViewport({ scale: 1.25 });
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await pageObj.render({ canvasContext: ctx, viewport }).promise;
      setLoading(false);
    }

    ;(window as any).__pdfGo = async (p: number) => {
      const next = Math.min(Math.max(p, 1), docRef.current.numPages);
      setPage(next);
      await renderPage(next);
    };

    load();
    return () => { cancelled = true; };
  }, [url]);

  React.useEffect(() => {
    if ((window as any).__pdfGo) (window as any).__pdfGo(page);
  }, [page]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs text-muted-foreground">Page {page} / {numPages}</div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page===1}>Prev</Button>
          <Button size="sm" variant="outline" onClick={() => setPage(p => Math.min(p + 1, numPages))} disabled={page===numPages}>Next</Button>
        </div>
      </div>
      <div className="rounded-xl border overflow-auto max-h-[70vh] bg-muted/20 grid place-items-center">
        <canvas ref={canvasRef} className="max-w-full" />
      </div>
      {loading && <div className="text-xs text-muted-foreground mt-2">Loading preview…</div>}
    </div>
  );
}
