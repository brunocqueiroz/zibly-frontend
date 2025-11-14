"use client"

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style jsx global>{`
        /* Force white theme for entire reports section */
        body {
          background-color: white !important;
          color: #111827 !important;
        }

        /* Override header/navigation dark backgrounds - more specific selectors */
        header, nav, [role="banner"], [role="navigation"],
        .sticky.top-0, header.sticky {
          background-color: white !important;
          color: #111827 !important;
          border-bottom: 1px solid #e5e7eb !important;
        }

        /* Target the specific header classes from navbar component */
        .bg-background {
          background-color: white !important;
        }

        /* Remove backdrop blur effects that might darken */
        .backdrop-blur-sm {
          backdrop-filter: none !important;
          background-color: white !important;
        }

        /* Fix any elements with dark backgrounds */
        [class*="bg-black"],
        [class*="bg-gray-900"],
        [class*="bg-slate-900"],
        [class*="bg-zinc-900"],
        [class*="dark:bg-"],
        .bg-background {
          background-color: white !important;
        }

        /* Ensure text is dark on white background */
        [class*="text-white"],
        [class*="text-gray-100"],
        [class*="dark:text-"] {
          color: #111827 !important;
        }

        /* Fix Zibly logo and navigation bar */
        .bg-black, .bg-gray-900, .bg-slate-900 {
          background-color: white !important;
          border-bottom: 1px solid #e5e7eb;
        }

        /* Ensure links in header are visible */
        header a, nav a {
          color: #374151 !important;
        }

        header a:hover, nav a:hover {
          color: #111827 !important;
        }

        /* Buttons in header should remain visible */
        header button, nav button {
          color: #374151 !important;
          border-color: #d1d5db !important;
        }

        header button:hover, nav button:hover {
          background-color: #f3f4f6 !important;
          color: #111827 !important;
        }

        /* Fix any gradient backgrounds - but preserve political spectrum gradient */
        [class*="gradient"]:not(.bg-gradient-to-r) {
          background: white !important;
        }

        /* Ensure the email button stays black with white text */
        header .bg-black.hover\\:bg-black\\/90 {
          background-color: #111827 !important;
          color: white !important;
        }
      `}</style>
      {children}
    </>
  )
}