import React from "react";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-10 bg-green-300 origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar;
