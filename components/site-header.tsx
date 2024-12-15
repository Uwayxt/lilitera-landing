// components/site-header.tsx
import Link from "next/link"
import { 
  SunIcon, 
  DiscordLogoIcon, 
  TwitterLogoIcon, 
  GitHubLogoIcon 
} from "@radix-ui/react-icons"
import { 
  Menu, 
  Send 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList 
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { SearchCommand } from "./search"

const socialLinks = [
  { 
    icon: GitHubLogoIcon, href: "https://github.com/sunnyshiba", 
    label: "GitHub" 
  },
  { 
    icon: TwitterLogoIcon, 
    href: "https://x.com/sunnyshiba", 
    label: "X" 
  },
  { 
    icon: Send, 
    href: "https://t.me/sunnyshibacommunity", 
    label: "Telegram" 
  },
  { 
    icon: DiscordLogoIcon, 
    href: "https://discord.gg/sunnyshiba", 
    label: "Discord" 
  }
]

const menuItems = [
  {
    title: "Home",
    href: "/",
    description: "Main landing page of SunnyShiba"
  },
  {
    title: "Docs",
    href: "/docs",
    description: "Comprehensive documentation"
  },
  {
    title: "Tokenomics",
    href: "/tokenomics",
    description: "Token distribution and economics"
  },
  {
    title: "ShibaVerse",
    href: "/shibaverse",
    description: "Explore our metaverse platform"
  }
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-center">
        {/* Mobile Menu */}
        <div className="flex items-center w-full md:justify-center">
          <Sheet>
            <SheetTrigger asChild className="md:hidden mr-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="flex items-center">
                  <SunIcon className="h-6 w-6 mr-2" />
                  SunnyShiba
                </SheetTitle>
              </SheetHeader>
              
              {/* Mobile Navigation */}
              <nav className="grid gap-4 py-4">
                {menuItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="block py-2 hover:bg-accent rounded-md"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>

              {/* Mobile Social Links */}
              <div className="mt-auto pb-4">
                <h3 className="text-sm font-semibold mb-2">Connect With Us</h3>
                <div className="flex space-x-4 justify-start">
                  {socialLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <link.icon className="h-6 w-6" />
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo and Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <SunIcon className="h-6 w-6" />
              <span className="font-bold inline-block">SunnyShiba</span>
            </Link>

            {/* Desktop Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="px-3 py-2 hover:bg-accent rounded-md">
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block  w-[500px]">
            <SearchCommand />
          </div>

          {/* Social Links for Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}