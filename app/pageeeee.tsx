"use client"

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Rocket, 
  Users, 
  Coins, 
  Sparkles, 
  BookOpen, 
  Globe,
  ArrowRight
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import { SparklesCore } from "@/components/ui/sparkles"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { useRef } from 'react'

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const features = [
    {
      icon: <Users className="w-12 h-12 text-amber-500" />,
      title: "Community-Driven",
      description: "Transparent governance through community polls",
      animationDelay: 0.2
    },
    {
      icon: <Coins className="w-12 h-12 text-amber-500" />,
      title: "Sunny Rewards",
      description: "Earn by staking and providing liquidity",
      animationDelay: 0.4
    },
    {
      icon: <Globe className="w-12 h-12 text-amber-500" />,
      title: "ShibaVerse",
      description: "Immersive metaverse platform coming soon",
      animationDelay: 0.6
    }
  ];

  const tokenomicsData = [
    { label: 'Total Supply', value: '1,000,000,000 SUNSHIBA' },
    { label: 'Community Allocation', value: '40%' },
    { label: 'Team & Advisors', value: '15%' },
    { label: 'Liquidity Pool', value: '25%' },
    { label: 'Marketing', value: '10%' },
    { label: 'Ecosystem Development', value: '10%' }
  ];

  const roadmapStages = [
    {
      quarter: 'Q1 2024',
      title: 'Project Launch',
      achievements: [
        'Token Contract Deployment',
        'Initial Community Building',
        'Website Launch'
      ]
    },
    {
      quarter: 'Q2 2024',
      title: 'Ecosystem Expansion',
      achievements: [
        'CEX Listings',
        'Community Governance Platform',
        'Staking Rewards Program'
      ]
    },
    {
      quarter: 'Q3 2024',
      title: 'ShibaVerse Development',
      achievements: [
        'Metaverse Platform Alpha',
        'NFT Marketplace',
        'Strategic Partnerships'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 overflow-x-hidden">
      {/* Navbar with Sparkle Effect */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="absolute inset-0">
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#F59E0B"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Existing Navbar Content */}
        </div>
      </nav>

      {/* Hero Section with Advanced Parallax */}
      <motion.header 
        ref={ref}
        style={{ 
          y: backgroundY,
          position: 'relative',
          zIndex: 10 
        }}
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <TypewriterEffect 
            words={[
              { text: "Welcome to" },
              { text: "SunnyShiba:" },
              { text: "Crypto's Brightest" },
              { text: "Community" }
            ]}
            className="text-4xl md:text-6xl font-extrabold text-amber-600 mb-6"
          />
          <TextGenerateEffect 
            words="SunnyShiba is more than a meme coin—it's a vibrant movement bringing joy, positivity, and financial opportunity to crypto enthusiasts worldwide."
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
          />
        </div>
      </motion.header>

      {/* Features Section with Animated Cards */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: feature.animationDelay,
                    duration: 0.5 
                  }
                }}
                className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
              >
                {feature.icon}
                <h3 className="text-2xl font-bold text-amber-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section with Advanced Visualization */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-amber-600 mb-12">
            Tokenomics Breakdown
          </h2>
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center">
                <Button>
                  Explore Tokenomics <ArrowRight className="ml-2" />
                </Button>
              </div>
            }
          >
            {tokenomicsData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    delay: index * 0.2,
                    duration: 0.5 
                  }
                }}
                className="flex justify-between items-center bg-amber-50 p-4 rounded-lg mb-4"
              >
                <span className="text-amber-700 font-semibold">{item.label}</span>
                <span className="text-amber-900 font-bold">{item.value}</span>
              </motion.div>
            ))}
          </ContainerScroll>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 bg-gradient-to-r from-amber-200 to-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-amber-700 mb-12">
            Our Roadmap to Success
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {roadmapStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: index * 0.3,
                    duration: 0.5
                  }
                }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-sm font-medium text-amber-500 mb-2">
                  {stage.quarter}
                </div>
                <h3 className="text-2xl font-bold text-amber-700 mb-4">
                  {stage.title}
                </h3>
                <ul className="space-y-2">
                  {stage.achievements.map((achievement, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center text-gray-600"
                    >
                      <Sparkles className="w-4 h-4 mr-2 text-amber-500" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Advanced Animation */}
      <section className="bg-gradient-to-r from-amber-500 to-yellow-500 py-16 text-white relative overflow-hidden">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="absolute inset-0"
          particleColor="#FFFFFF"
        />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.5 }
            }}
            className="text-4xl font-bold mb-6"
          >
            Join the SunnyShiba Revolution!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.2, duration: 0.5 }
            }}
            className="text-xl mb-8"
          >
            Be part of a positive crypto movement that&apos;s bringing sunshine to the blockchain.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        {/* Existing Footer Content */}
      </footer>
    </div>
  )
}