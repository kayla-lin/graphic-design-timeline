import React, { useEffect } from "react";
import Cartwheel from "./Cartwheel";
import Sign from "./Sign";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Introduction = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const squareVariants = {
    visible: {
      opacity: 1,
      bottom: 0,
      transition: { duration: 1 },
    },
    hidden: { opacity: 0, bottom: -100 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <section className="h-screen w-screen text-white flex flex-col justify-center items-center relative">
        <h1
          title="The Digital Revolution"
          className="glitch text-5xl text-green-300"
        >
          The Digital Revolution
        </h1>
        <div
          className="glitch"
          title="Significant graphic design events from 1990s to Present,
        by Kayla Lin"
        >
          Significant graphic design events from 1990s to Present, by Kayla Lin
        </div>
        <Cartwheel />
      </section>
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
          and software, which changed graphic design. Computers allowed
          designers easy access to graphic tools, allowing for easy
          experimentation. Additionally, the release of the internet created a
          whole new area of graphic design. New fields emerged and called for
          designers for the new technologies. People{" "}
          <strong className="text-green-300">
            scrambled to integrate graphics and animation
          </strong>{" "}
          onto the latest technologies.
        </p>
      </motion.div>
    </>
  );
};

export default Introduction;
