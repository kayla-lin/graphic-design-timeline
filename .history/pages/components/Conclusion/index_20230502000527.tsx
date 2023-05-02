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
            rapid technological growth and rapid spread of information
          </strong>
          . Personal computers made information, thus graphic design accessible
          In order for new technology to be adopted by the masses, new
          technology needed intuitive design. Designers focused on using
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
