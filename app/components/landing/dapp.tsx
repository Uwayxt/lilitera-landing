"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const stats = [
  { number: "99k", text: "People have joined" },
  { number: "50k", text: "VVIP users have joined" },
  { number: "100+", text: "Big Companies have joined" }
];

const features = [
  {
    title: "Cross-Platform Access",
    description: "Whether you're on our mobile app, desktop wallet, or browser extension, your assets are synced seamlessly."
  },
  {
    title: "Clutter-Free Experience",
    description: "Stay focused on what matters — no ads, just secure, intuitive crypto tools."
  },
  {
    title: "Built-In Security",
    description: "From privacy modes to wallet encryption, your investments are always protected."
  }
];

const DappSection = () => {
  return (
    <section className="py-20 bg-inherit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold text-primary">{stat.number}</h3>
                <p className="mt-2 text-gray-600">{stat.text}</p>
              </motion.div>
            </Card>
          ))}
        </motion.div> */}

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Why Choose Lilitera?</h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <Image
              src="/images/features-1.png"
              alt="Dashboard Preview"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DappSection;