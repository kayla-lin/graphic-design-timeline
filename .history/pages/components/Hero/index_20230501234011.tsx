import React from "react";
import Cartwheel from "./Cartwheel";

const Hero = () => {
  return (
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
  );
};

export default Hero;
