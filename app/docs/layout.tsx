import { SidebarNav } from "@/components/sidebar-nav"
import { Navbar } from "../components/landing/navbar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 lg:pl-44 max-w-7xl md:pl-8 xs:pl-8 pt-12 md:pt-24">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <SidebarNav />
          </aside>
          <main className="relative p-6 lg:gap-8 lg:p-8 xl:grid max-w-6xl min-w-fit justify-between">
            <div className="mx-auto w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}