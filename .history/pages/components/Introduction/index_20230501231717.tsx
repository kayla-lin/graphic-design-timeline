/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Script from "next/script";
import Cartwheel from "./Cartwheel";

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
      <section className="container mx-auto text-white py-64">
        <p>
          The digital revolution is a period of advances in digital computers
          and software, which changed graphic design. Computers allowed
          designers easy access to graphic tools, allowing for easy
          experimentation. Additionally, the release of the internet created a
          whole new area of graphic design. New fields emerged and called for
          designers for computers and phone. People scrambled to integrate
          graphics and animation onto the latest technologies.
        </p>
      </section>
    </>
  );
};

export default Introduction;
