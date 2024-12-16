"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Drawer, 
  DrawerClose, 
  DrawerContent, 
  DrawerDescription, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger 
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "About SunnyShiba",
        href: "/docs/about",
      },
    ],
  },
  {
    title: "Token Information",
    items: [
      {
        title: "Overview",
        href: "/docs/token",
      },
      {
        title: "Tokenomics",
        href: "/docs/tokenomics",
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        title: "Community",
        href: "/docs/community",
      },
      {
        title: "Rewards",
        href: "/docs/rewards",
      },
      {
        title: "ShibaVerse",
        href: "/docs/shibaverse",
      },
    ],
  },
  {
    title: "Roadmap",
    items: [
      {
        title: "Phase 1",
        href: "/docs/roadmap/phase-1",
      },
      {
        title: "Phase 2",
        href: "/docs/roadmap/phase-2",
      },
      {
        title: "Phase 3",
        href: "/docs/roadmap/phase-3",
      },
    ],
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="w-full">
      {sidebarNav.map((group, index) => (
        <div key={index} className="pb-8">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            {group.title}
          </h4>
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-md px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground",
                pathname === item.href
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export function MobileSidebar() {
  const pathname = usePathname()

  return (
    <div className="md:hidden fixed z-50">
      <Drawer>
        <DrawerTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="fixed bottom-4 right-4 rounded-full w-12 h-12 shadow-lg"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </DrawerTrigger>
        
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
            <DrawerDescription>Explore SunnyShiba Documentation</DrawerDescription>
          </DrawerHeader>
          
          <div className="px-4 overflow-y-auto max-h-[70vh]">
            <SidebarNav />
          </div>
          
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export function DesktopSidebar() {
  return (
    <div className="hidden md:block w-64 border-r">
      <ScrollArea className="h-[calc(100vh-3.5rem)] py-6">
        <SidebarNav />
      </ScrollArea>
    </div>
  )
}