import { Wallet } from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Lilitera Foundation",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Roadmap", href: "/roadmap" },
      { label: "Careers", href: "/careers" },
      { label: "Security & Safety", href: "/security" },
      { label: "Newsroom", href: "/news" },
    ],
  },
  {
    title: "Learn & Support",
    links: [
      { label: "How to Buy LITA", href: "/buy-lita" },
      { label: "FAQs", href: "/faqs" },
      { label: "Documentation", href: "/docs" },
      { label: "Contact Us", href: "/contact" },
      { label: "Support Center", href: "/support" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Lilitera Wallet App", href: "/wallet-app" },
      { label: "Desktop DApp", href: "/desktop-dapp" },
      { label: "CEX Platform", href: "/cex" },
      { label: "Yield Farming", href: "/yield-farming" },
      { label: "Token Swap", href: "/token-swap" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Tokenomics", href: "/tokenomics" },
      { label: "Market Updates", href: "/market-updates" },
      { label: "Prices", href: "/prices" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    title: "Social Media",
    links: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "YouTube", href: "https://youtube.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Wallet className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Lilitera</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering the future of decentralized finance with Lilitera.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin", "youtube"].map((social) => (
                <Link
                  key={social}
                  href={`https://${social}.com`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social}`}></i>
                </Link>
              ))}
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lilitera Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
