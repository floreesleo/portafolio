"use client";

import { motion } from "framer-motion";

export default function AnimatedVerticalLine() {
  return (
    <motion.div
      className="fixed left-3 top-1/4 h-full w-[3px] bg-gradient-to-t from-violet-800 to-transparent md:left-36"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.8 }}
    />
  );
}
