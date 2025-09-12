import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">Page not found</h1>
      <p className="text-muted-foreground mb-8">
        The page you’re looking for doesn’t exist. Check the URL or head back home.
      </p>
      <div className="flex justify-center gap-3">
        <Link href="/" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
          Go to Homepage
        </Link>
        <Link href="/features" className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-accent">
          Explore Features
        </Link>
      </div>
    </div>
  )
}

