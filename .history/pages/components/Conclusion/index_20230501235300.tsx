import React from "react";
import RevealDiv from "../RevealDiv";
import Sign from "./Sign";

const Conclusion = () => {
  return (
    <RevealDiv>
      <section className="container mx-auto text-white py-32 flex justify-center items-center gap-10">
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
        <Sign />
      </section>
    </RevealDiv>
  );
};

export default Conclusion;
