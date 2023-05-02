import Image from "next/image";
import React, { FC, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string;
  date: string;
  desc: string;
  img?: string;
  index?: number;
}

const TimelineElement: FC<Props> = ({ title, desc, img, date, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const squareVariants = {
    visible: {
      opacity: 1,
      left: index ? 15 : -15,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, left: index ? 100 : -100 },
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
      className={`w-1/2 relative text-white bg-slate-400 bg-opacity-10 p-5 border border-gray-800 flex flex-col gap-3 ${
        index % 2 ? "self-end left-5" : "self-start right-5"
      }`}
    >
      <span className="text-green-300">{date}</span>
      <h1>{title}</h1>
      {img && (
        <div className="h-64 w-100 relative">
          <Image
            src={`/img/${img}`}
            alt={title}
            layout="fill" // required
            objectFit="cover" // change to suit your needs
          />
        </div>
      )}
      <p>{desc}</p>
    </motion.div>
  );
};

export default TimelineElement;
