import React from "react";
import { useScroll, motion } from "framer";

const Line = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="h-full right-1/2 w-0.5 bg-green-300 bg-opacity-50 absolute z-50 "
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default Line;
