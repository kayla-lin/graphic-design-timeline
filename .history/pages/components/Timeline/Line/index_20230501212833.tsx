import React from "react";
import { motion, useScroll } from "framer-motion";

const Line = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ height: Number(scrollYProgress) * 100 }}
      className="right-1/2 w-0.5 border border-r-green-300 absolute z-50 origin-[0%]"
    />
  );
};

export default Line;
