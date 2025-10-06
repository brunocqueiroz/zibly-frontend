"use client"

import Link from "next/link"
import SlideUp from "@/components/animations/SlideUp"
import GradientText from "@/components/animations/GradientText"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"
import AnimatedCard from "@/components/animations/AnimatedCard"
import WaveDivider from "@/components/WaveDivider"

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
      <section className="w-full py-12 md:py-20 bg-white">
        <div className="container px-4 md:px-6 text-center">
          <SlideUp>
            <h1 className="inter-section-heading" style={{ fontSize: '48px', fontWeight: 400 }}><GradientText>Solutions</GradientText></h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-lg mt-2">
              Tailored workflows and deliverables for professionals and students. Send tasks to work@zibly.ai and receive polished outputs.
            </p>
          </SlideUp>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <h2 className="text-2xl font-semibold mb-4 text-black">Professionals</h2>
          </SlideUp>
          <StaggerContainer className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {pros.map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href} className="block">
                  <AnimatedCard>
                    <div className="rounded-lg border p-4 hover:shadow-sm transition">
                      <div className="text-lg font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">View solution →</div>
                    </div>
                  </AnimatedCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      <section className="w-full py-8 pb-16 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <h2 className="text-2xl font-semibold mb-4 text-black">Students</h2>
          </SlideUp>
          <StaggerContainer className="grid gap-4 md:grid-cols-3">
            {students.map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href} className="block">
                  <AnimatedCard>
                    <div className="rounded-lg border p-4 hover:shadow-sm transition">
                      <div className="text-lg font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">View solution →</div>
                    </div>
                  </AnimatedCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}

