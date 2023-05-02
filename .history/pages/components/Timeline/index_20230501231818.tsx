import React, { FC, ReactNode } from "react";
import TimelineElements from "./TimelineElements";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Timeline: FC<Props> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const [hookedYPostion, setHookedYPosition] = React.useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });

  return (
    <section className="container mx-auto flex flex-col relative ">
      <svg
        height="210"
        width="500"
        className="right-1/2 w-0.5 h-full absolute z-20"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="0"
          y1="0"
          pathLength="0.5"
          x2="0"
          y2={`${hookedYPostion * 50}%`}
          className="stroke-gray-800 opacity-80"
          style={{
            strokeWidth: "10",
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
