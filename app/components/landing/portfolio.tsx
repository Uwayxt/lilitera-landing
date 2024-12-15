"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PortfolioSection = () => {
  return (
    <section className="py-24 bg-inherit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <Image
              src="/images/features-2.png"
              alt="Portfolio Interface"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Portfolio Dashboard</h2>
            <p className="text-lg text-gray-600">
            Buy, sell, and track your assets effortlessly. Lilitera Wallet gives you the tools you need to start, manage, and grow your crypto investments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;