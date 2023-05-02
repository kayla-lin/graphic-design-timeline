import Image from "next/image";
import React, { FC, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface Props {
  title: string;
  date: string;
  desc: string[];
  img?: string;
  index?: number;
  href?: string;
  hrefTitle?: string;
}

const TimelineElement: FC<Props> = ({
  title,
  desc,
  img,
  date,
  index,
  href,
  hrefTitle,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const isEven = index && index % 2;

  const squareVariants = {
    visible: {
      opacity: 1,
      left: isEven ? 15 : -15,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, left: isEven ? 100 : -100 },
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
        isEven ? "self-end left-5" : "self-start right-5"
      }`}
    >
      <span className="text-green-300">{date}</span>
      <h1>{title}</h1>
      {img && (
        <div className="h-64 w-100 relative">
          <Image
            src={`/img/${img}`}
            alt={title}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      {desc.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      {href && hrefTitle && <Link href={href}>{hrefTitle}</Link>}
    </motion.div>
  );
};

export default TimelineElement;