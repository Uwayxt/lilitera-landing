"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const contractAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);

    const copyIcon = document.getElementById("copy-icon");
    const successToast = document.getElementById("copy-success-toast");

    if (copyIcon) {
      copyIcon.classList.add("loading");
    }

    setTimeout(() => {
      if (copyIcon) {
        copyIcon.classList.remove("loading");
      }
      if (successToast) {
        successToast.style.display = "block";
      }

      setTimeout(() => {
        if (successToast) {
          successToast.style.display = "none";
        }
      }, 2000);
    }, 2000);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          <span className="text-primary">Your Gateway</span> <br />
          to Lilitera Foundation
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8"
        >
          Discover how Lilitera Token (LITA) fuels our ecosystem, from secure swaps to yield farming opportunities. Transparent, sustainable, and designed to empower.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg"
            alt="Ethereum Logo"
            className="w-24 h-24"
          />

          <div className="flex items-center gap-2 p-4 bg-accent rounded-lg max-w-md w-full">
            <span className="text-sm font-mono truncate flex-1">{contractAddress}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="shrink-0"
            >
              <Copy id="copy-icon" className="h-4 w-4" />
            </Button>
          </div>



          <Link href="/docs">
            <Button className="gap-2">
              See Documentation
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://pancakeswap.finance" target="_blank">
            <Button variant="outline" className="gap-2">
              Buy on PancakeSwap
            </Button>
          </Link>
        </motion.div>

          <motion.p
          variants={item}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8"
        >
          Get all the details about Lilitera Foundation&apos;s mission, technology, and vision. Your guide to the future of crypto innovation.
        </motion.p>
        
        <div id="copy-success-toast" className="hidden fixed bottom-4 right-4 bg-background text-primary p-2 rounded outline-2 outline-primary-foreground">
          <Button variant="outline" className="gap-2">   
                Address copied to clipboard!
            </Button>
        </div>

        <motion.div
          variants={item}
          className="flex justify-center items-center gap-8 grayscale opacity-50"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/12/Binance_logo.svg"
            alt="Binance"
            className="h-8"
          />
          <img
            src="https://saito.tech/wp-content/uploads/2022/12/PancakeSwap-Crypto-Logo-PNG-Cutout-1024x373.png"
            alt="Coinbase"
            className="h-24"
          />
          <img
            src="https://seeklogo.com/images/E/ethereum-logo-DE26DD608D-seeklogo.com.png"
            alt="Ethereum"
            className="h-8"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
