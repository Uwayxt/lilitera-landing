"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Step {
  step: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    step: "Step 1",
    description: "Copy the Lilitera (LITA) contract address from the official website.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
  },
  {
    step: "Step 2",
    description: "Open PancakeSwap and connect your wallet (e.g., MetaMask).",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pancakeswap-logo.svg/512px-Pancakeswap-logo.svg.png",
  },
  {
    step: "Step 3",
    description: "Paste the LITA contract address in the token search bar to import it.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
  },
  {
    step: "Step 4",
    description: "Enter the amount of BNB you want to swap for LITA tokens.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png",
  },
  {
    step: "Step 5",
    description: "Confirm the transaction in your wallet and wait for it to be processed.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png",
  },
  {
    step: "Step 6",
    description: "Congratulations! You now own LITA tokens.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
  },
];

export function HowToBuy() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">How to Buy Lilitera (LITA)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={step.image} alt={step.step} />
                      <AvatarFallback>{step.step[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{step.step}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
