export type DeliverableKind = 'pdf' | 'slides' | 'doc' | 'csv' | 'images';

export type ExampleItem = {
  id: string;
  title: string;
  category: string;       // e.g., "Legal & Ops"
  complexity: 'Low' | 'Medium' | 'High';
  dept: string;           // e.g., "Product/Eng"
  email: string;          // Original client email (plaintext)
  did: string[];          // Bulleted list of actions taken
  deliverables: string[]; // Human-friendly labels (e.g., "MSA_redline.docx")
  preview?: {
    pdfUrl?: string;      // When present, PdfViewer renders this
    pageCount?: number;   // Optional metadata
  };
};

