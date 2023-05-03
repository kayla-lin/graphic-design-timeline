import React from "react";
import Cartwheel from "./Cartwheel";

const Hero = () => {
  return (
    <section className="overflow-x-hidden h-screen w-screen text-white flex flex-col justify-center items-center relative gap-3">
      <h1
        title="The Digital Revolution"
        className="text-center glitch text-xl md:text-3xl lg:text-5xl text-green-300"
      >
        The Digital Revolution
      </h1>
      <div
        className="text-center glitch text-xs md:text-lg"
        title="Graphic design events 1990s to Present"
      >
        Graphic design events 1990s to Present
      </div>
      <div
        className="glitch text-xs md:text-lg"
        title="
        By Kayla Lin"
      >
        By Kayla Lin
      </div>
      <Cartwheel />
    </section>
  );
};

export default Hero;
