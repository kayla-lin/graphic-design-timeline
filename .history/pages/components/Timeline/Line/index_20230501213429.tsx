import React from "react";
import { motion, useScroll } from "framer-motion";

const Line = () => {
  const { scrollY } = useScroll();
  console.log(scrollY);
  return (
    <motion.div
      style={{ height: scrollY }}
      className="right-1/2 w-0.5 border border-r-green-300 absolute z-50 origin-[0%]"
    />
  );
};

export default Line;
