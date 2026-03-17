"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BentoGridProps {
  children: ReactNode;
}

export const BentoGrid = ({ children }: BentoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1200px] mx-auto pb-24">
      {children}
    </div>
  );
};

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const BentoCard = ({ children, className = "", delay = 0 }: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className={`bento-card p-8 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
};
