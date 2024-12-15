"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Wallet, Banknote, ArrowRightLeft } from "lucide-react";

const steps = [
  {
    title: "Sign Up",
    description: "Buy Bitcoin or Ethereum, the securely store it in your wallet or send it on easily to friends",
    icon: Wallet
  },
  {
    title: "Fund",
    description: "Choose you preferred payment method such as bank transfer or credit card to top up your wallet",
    icon: Banknote
  },
  {
    title: "Buy Crypto",
    description: "Sign up for free wallet on web, iOS or Android and follow our easy process to set up your profile",
    icon: ArrowRightLeft
  }
];

const GetStartedSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get Started in Just Few Minute</h2>
          <p className="text-lg text-gray-600">
            Has a variety of features that make it the best place to start trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;