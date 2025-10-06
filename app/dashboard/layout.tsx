import DashboardNav from "@/components/dashboard-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <DashboardNav />
      <main className="ml-64 min-h-screen">
        {children}
      </main>
    </div>
  )
}
