import React from "react";
import RevealDiv from "../RevealDiv";
import Sign from "./Sign";

const Conclusion = () => {
  return (
    <RevealDiv>
      <section className="container mx-auto text-white py-32 flex justify-center items-center gap-10">
        <div className="flex flex-col gap-5">
          <p>
            The digital revolution is a period of{" "}
            <strong className="text-green-300">
              rapid technological growth and rapid spread of information
            </strong>
          </p>
          <p>
            Personal computers made information and new graphical mediums. Now
            people could and learn experiment with graphic design at home.
            Artists used digital art programs, like Adobe Suite, as a serious
            medium for design. The new nature of the internet allowed for the
            growth of a sub-cultured of artists who made experimental designs
            with code.
          </p>
          <p>
            Corporations also rushed to take advantage of the accessibility of
            the internet. Corporations rapidly created websites. Thus, a
            subfield of graphic design was born--web design.
          </p>
          <p></p>
        </div>
        <Sign />
      </section>
    </RevealDiv>
  );
};

export default Conclusion;
