"use client"

import { CTA } from "./components/landing/cta"
import DappSection from "./components/landing/dapp"
import { Footer } from "./components/landing/footer"
import { Hero } from "./components/landing/hero"
import { Navbar } from "./components/landing/navbar"
import PortfolioSection from "./components/landing/portfolio"
import SecuritySection from "./components/landing/security"
import { HowToBuy } from "./components/landing/testimonials"



export default function Home() {
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DappSection />
      <PortfolioSection/>
      <SecuritySection/>
      <HowToBuy />
      <CTA/>
      <Footer/>
    </div>
  )
}