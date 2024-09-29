"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    scrollYProgress.onChange((lastestValue) => {
      setScrollProgress(lastestValue);
    });
  }, [scrollYProgress]);
  return (
    <motion.div
      className="fixed left-0 top-0 h-full w-2 origin-top bg-violet-800"
      style={{ scaleY: scrollProgress }}
    />
  );
}
