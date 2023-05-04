import React, { FC, ReactNode } from "react";
import TimelineElements from "./TimelineElements";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Timeline: FC<Props> = ({ children }) => {
  return (
    <section className="container mx-auto flex flex-col relative overflow-hidden w-100">
      <svg
        height="210"
        width="500"
        className="right-1/2 w-0.5 h-full absolute z-20 hidden lg:block"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="0"
          pathLength="0.25"
          x2="0"
          y2="100%"
          className="stroke-gray-800 opacity-100"
          style={{
            strokeWidth: "2",
            height: "100%",
            vectorEffect: "non-scaling-stroke",
          }}
        />
      </svg>
      <TimelineElements>{children}</TimelineElements>
    </section>
  );
};

export default Timeline;
