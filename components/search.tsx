// components/search-command.tsx
"use client"

import React, { useEffect, useState } from "react"
import { 
  Command, 
  CommandDialog, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from "@/components/ui/command"
import { 
  SearchCodeIcon 
} from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from '@/components/ui/button';

// Definisi tipe untuk item pencarian
interface SearchItem {
  id: string
  title: string
  description: string
  href: string
}

// Data contoh untuk pencarian
const searchItems: SearchItem[] = [
  {
    id: "home",
    title: "Home",
    description: "SunnyShiba Landing Page",
    href: "/"
  },
  {
    id: "docs",
    title: "Documentation",
    description: "Comprehensive SunnyShiba Docs",
    href: "/docs"
  },
  {
    id: "tokenomics",
    title: "Tokenomics",
    description: "Token Distribution & Economics",
    href: "/tokenomics"
  },
  {
    id: "shibaverse",
    title: "ShibaVerse",
    description: "Explore Our Metaverse Platform",
    href: "/shibaverse"
  }
]

export function SearchCommand() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Fungsi untuk menangani shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((currentOpen) => !currentOpen)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      {/* Tombol Pencarian */}
      <Button 
        variant="outline" 
        className="relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <SearchCodeIcon className="mr-2 h-4 w-4" />
        Search docs...
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </Button>

      {/* Dialog Pencarian */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput 
            placeholder="Type to search docs..." 
            onValueChange={(search) => {
              // Logika filter dapat ditambahkan di sini
            }}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            
            {/* Kelompok Hasil Pencarian */}
            <CommandGroup heading="Navigation">
              {searchItems.map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => {
                    router.push(item.href) // Navigasi ke halaman yang dipilih
                    setOpen(false) // Tutup dialog
                  }}
                >
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.description}
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}