"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SecuritySection = () => {
  return (
    <section className="py-24 bg-inherit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] order-2"
          >
            <Image
              src="/images/features-3.png"
              alt="Security Features"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 order-1"
          >
            <h2 className="text-4xl font-bold">Security From Day One</h2>
            <p className="text-lg text-gray-600">
              Safety, security and compliance. Buy and sell popular digital currencies, keep track of them in the one place.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;