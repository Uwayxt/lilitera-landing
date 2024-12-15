"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTA() {
  return (
    <section className="py-24 bg-inherit text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-10 text-primary">Join a new generation of investors</h2>
            <Button className="px-12">
              Get started
            </Button>
          </div>
          <div className="flex-1 relative items-end justify-end">
            <div className="relative h-48 md:h-64 ">
              <Image
                src="/images/promo-image.png"
                alt="Cryptocurrency coins"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-xl "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}