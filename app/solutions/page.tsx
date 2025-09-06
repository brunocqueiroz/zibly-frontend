import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions for Professionals and Students - zibly.ai",
  description: "Explore Zibly solutions by role. Professionals: consulting, finance, legal, strategy, product, marketing, accounting. Students: MBA, Law, and Undergraduates.",
  alternates: { canonical: "https://zibly.ai/solutions" },
}

const pros = [
  { title: "Consultants", href: "/solutions/consultants" },
  { title: "Investment Banking", href: "/solutions/investment-banking" },
  { title: "Private Equity", href: "/solutions/private-equity" },
  { title: "Strategy", href: "/solutions/strategy" },
  { title: "Marketing", href: "/solutions/marketing" },
  { title: "Product Managers", href: "/solutions/product-managers" },
  { title: "Accountants", href: "/solutions/accountants" },
  { title: "Attorneys", href: "/solutions/attorneys" },
]

const students = [
  { title: "MBA Students", href: "/solutions/mba-students" },
  { title: "Law Students", href: "/solutions/law-students" },
  { title: "Undergraduates", href: "/solutions/undergraduates" },
]

export default function SolutionsIndexPage() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="inter-section-heading" style={{ fontSize: '48px', fontWeight: 400 }}>Solutions</h1>
          <p className="mx-auto max-w-[800px] text-gray-600 md:text-lg mt-2">
            Tailored workflows and deliverables for professionals and students. Send tasks to work@zibly.ai and receive polished outputs.
          </p>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-semibold mb-4">Professionals</h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {pros.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg border p-4 hover:shadow-sm transition">
                <div className="text-lg font-medium">{item.title}</div>
                <div className="text-sm text-muted-foreground">View solution →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 pb-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-semibold mb-4">Students</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {students.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg border p-4 hover:shadow-sm transition">
                <div className="text-lg font-medium">{item.title}</div>
                <div className="text-sm text-muted-foreground">View solution →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

