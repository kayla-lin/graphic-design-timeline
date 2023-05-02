import React, { useEffect } from "react";
import Sign from "../Introduction/Sign";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Introduction = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const squareVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2 },
    },
    hidden: { opacity: 0, y: -200 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="container mx-auto text-white py-32 flex justify-center items-center gap-10"
    >
      <Sign />
      <p>
        The digital revolution is a period of{" "}
        <strong className="text-green-300">
          advances in digital computers
        </strong>{" "}
        and software, which changed graphic design. Computers allowed designers
        easy access to graphic tools, allowing for easy experimentation.
        Additionally, the release of the internet created a whole new area of
        graphic design. New fields emerged and called for designers for the new
        technologies. People{" "}
        <strong className="text-green-300">
          scrambled to integrate graphics and animation
        </strong>{" "}
        onto the latest technologies.
      </p>
    </motion.div>
  );
};

export default Introduction;
