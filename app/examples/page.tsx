"use client";
import * as React from "react";
import { EXAMPLES } from "@/lib/examples/data";
import { ExampleItem } from "@/lib/examples/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import PdfViewer from "@/components/examples/PdfViewer";

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium bg-primary/5 border-primary/20 text-primary">{children}</span>;
}

function ExampleCard({ ex }: { ex: ExampleItem }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Card className="rounded-2xl hover:shadow-lg transition-shadow border-primary/10">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-xl">{ex.title}</CardTitle>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">{ex.category}</Badge>
            <Pill>{ex.dept}</Pill>
            <Pill>Complexity: {ex.complexity}</Pill>
          </div>
        </div>
      </CardHeader>

      <CardContent className="grid md:grid-cols-3 gap-6">
        {/* Left: Email */}
        <div className="md:col-span-1">
          <div className="rounded-xl border p-4 bg-gradient-to-br from-primary/5 to-purple-500/5">
            <div className="text-sm font-medium mb-2">Client email (excerpt)</div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed">{ex.email}</pre>
            <Separator className="my-3" />
            <div>
              <div className="text-sm font-medium mb-2">Attachments</div>
              <div className="flex flex-wrap gap-2">
                {ex.deliverables.map((del, i) => (
                  <Badge key={i} variant="outline" className="border-primary/30 text-primary">{del}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Middle: What Zibly did */}
        <div className="md:col-span-1">
          <div className="rounded-xl border p-4 bg-card/40 h-full">
            <div className="text-sm font-medium mb-2">What Zibly did</div>
            <ul className="space-y-2 text-sm">
              {ex.did.map((d, i) => (<li key={i} className="flex items-start gap-2">• <span>{d}</span></li>))}
            </ul>
            <Separator className="my-3" />
            <div className="flex flex-wrap gap-2">
              {ex.deliverables.map((del, i) => (<Badge key={i} variant="outline">{del}</Badge>))}
            </div>
          </div>
        </div>

        {/* Right: Preview */}
        <div className="md:col-span-1">
          <div className="rounded-xl border p-4 bg-card/40 h-full flex flex-col">
            <div className="text-sm font-medium mb-2">Sample outputs</div>
            <div className="text-xs text-muted-foreground">Open on-site preview</div>
            <div className="mt-auto pt-4">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full">View attachments</Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl">
                  <DialogHeader><DialogTitle>{ex.title} — Preview</DialogTitle></DialogHeader>
                  {ex.preview?.pdfUrl ? (
                    <PdfViewer url={ex.preview.pdfUrl} />
                  ) : (
                    <div className="rounded-xl border p-6 text-sm text-muted-foreground">
                      No preview attached yet. Once the server conversion API returns a PDF URL, it will render here.
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ExamplesPage() {
  // Optional: replace EXAMPLES with fetched + merged data using /api/manifest.
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight">
          See Zibly in action — <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">email → deliverables</span>
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          These are real outputs from Zibly, shown exactly as delivered — no edits or embellishments.
        </p>
      </header>

      <div className="grid gap-6">
        {EXAMPLES.map(ex => <ExampleCard key={ex.id} ex={ex} />)}
      </div>
    </div>
  );
}
