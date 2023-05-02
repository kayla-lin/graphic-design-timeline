import React from "react";
import RevealDiv from "../RevealDiv";
import Sign from "./Sign";

const Conclusion = () => {
  return (
    <RevealDiv>
      <section className="container mx-auto text-white py-32 flex justify-center items-center gap-10">
        <div>
          <p>
            The digital revolution is a period of{" "}
            <strong className="text-green-300">
              rapid technological growth and rapid spread of information
            </strong>
            . Personal computers made information and new graphical mediums. Now
            people could and learn experiment with graphic design at home.
            Artists used digital art programs, like Adobe Suite, as a serious
            medium for design. The internet also allowed for new sub-mediums of
            web design to be explored.
          </p>
          <p>
            In order for new technology to be adopted by the masses, new
            technology needed intuitive design. Designers focused on using
            <strong className="text-green-300">
              scrambled to integrate graphics and animation
            </strong>{" "}
            onto the latest technologies.
          </p>
        </div>
        <Sign />
      </section>
    </RevealDiv>
  );
};

export default Conclusion;
