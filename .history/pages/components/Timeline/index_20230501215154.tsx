import React, { Children, FC, ReactNode, useRef } from "react";
import TimelineElements from "./TimelineElements";
import { useScroll, motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Timeline: FC<Props> = ({ children }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();

  return (
    <section className="container mx-auto flex flex-col relative">
      <motion.div
        style={{ opacity: scrollYProgress }}
        className="right-1/2 w-0.5 border border-r-green-300 absolute z-50"
      />
      <TimelineElements>{children}</TimelineElements>
    </section>
  );
};

export default Timeline;
