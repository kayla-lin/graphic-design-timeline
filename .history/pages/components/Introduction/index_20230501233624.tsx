import React from "react";
import Cartwheel from "./Cartwheel";
import Sign from "./Sign";

const Introduction = () => {
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
      <section className="container mx-auto text-white py-32 flex justify-center items-center gap-10">
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
      </section>
    </>
  );
};

export default Introduction;
