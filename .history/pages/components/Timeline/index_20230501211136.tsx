import { useScroll, motion } from "framer";
import React, { Children, FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Timeline: FC<Props> = ({ children }) => {
  const mapped = Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props,
        index,
        isFirst: index === 0,
        isLast: !Array.isArray(children) || index === children.length - 1,
      });
    }
    return null;
  });

  const { scrollYProgress } = useScroll();

  return (
    <section className="container mx-auto flex flex-col relative">
      <motion.div className="h-full right-1/2 w-0.5 bg-green-300 bg-opacity-50 absolute z-50 origin-[0%]" />
      {mapped}
    </section>
  );
};

export default Timeline;
