import React from "react";
import { motion, useScroll } from "framer-motion";

const Line = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="h-full right-1/2 w-0.5 bg-green-300 bg-opacity-50 absolute z-50 origin-[0%]"
    />
  );
};

export default Line;
