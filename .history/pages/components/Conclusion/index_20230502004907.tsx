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
            </strong>{" "}
            Good design was needed to make the transition to the digital world
            global.
          </p>
          <p>
            Personal computers made information and new graphical mediums.{" "}
            <strong className="text-green-300">
              People could and learn experiment with graphic design at home
            </strong>
            . Artists used digital art programs, like Adobe Suite, as a serious
            medium for design. The new nature of the internet created a
            sub-cultured of artists who made experimental designs with code.
          </p>
          <p>
            <strong className="text-green-300">
              Corporations also rushed to take advantage of the accessibility of
              the internet
            </strong>
            . Corporations rapidly created websites. Thus, a subfield of graphic
            design was born--web design.
          </p>
          <p>
            With new technology, corporations needed intuitive designs for fast,
            mass adoption. This led to the popularity of skeuomorphism.
          </p>
          <p>
            When the iPhone released, another sub-field of graphic design was
            created to create interfaces for mobile platforms.
          </p>
          <p>
            Over 20 years after the popularity of skeuomorphism, the current
            design trend was steered towards the opposite.{" "}
            <strong className="text-green-300">
              Flat design was the new trend, which favored flat, minimalistic
              Swiss Modern like design
            </strong>
            . Skeuomorphism became cluttered and unnecessary in a world that was
            already familiar with computer interfaces.
          </p>
          <p>
            However, design still benefited from the intuitiveness of
            skeuomorphism--and now the present-day design trend is flat design
            2.0 is{" "}
            <strong className="text-green-300">
              a mix of skeuomorphism and flat design
            </strong>
            .
          </p>
        </div>
        <Sign />
      </section>
    </RevealDiv>
  );
};

export default Conclusion;
