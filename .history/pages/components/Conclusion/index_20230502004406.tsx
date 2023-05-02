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
            medium for design. The new nature of the internet created a
            sub-cultured of artists who made experimental designs with code.
          </p>
          <p>
            Corporations also rushed to take advantage of the accessibility of
            the internet. Corporations rapidly created websites. Thus, a
            subfield of graphic design was born--web design.
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
            design trend was steered towards the opposite: flat design.
            Skeuomorphism became cluttered and unnecessary in a world that was
            already familiar with computer interfaces. Thus, the design trends
            were more Swiss Modern: simple and flat.
          </p>
          <p>
            However, design still benefited from the intuitiveness of
            skeuomorphism--flat design became a mix of skeuomorphism and flat
            design, and gave rise of the isometric design trend.
          </p>
        </div>
        <Sign />
      </section>
    </RevealDiv>
  );
};

export default Conclusion;
