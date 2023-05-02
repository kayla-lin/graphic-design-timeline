/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Script from "next/script";

const Introduction = () => {
  // My representation of your input ASCII you get from elsewhere
  var frame1 = ["<pre><code>", " _o", "__|-", "   ></code></pre>"].join("\n");
  var frame2 = ["<pre><code>", " _o", "__|-", "   ></code></pre>"].join("\n");

  // dangerouslySetInnerHTML expects an object like this:
  //var wrappedASCII = { __html: inputASCII };

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

      <span>{frame1}</span>
      <div id="fscroller"></div>
    </section>
  );
};

export default Introduction;
