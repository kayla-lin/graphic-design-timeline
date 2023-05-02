/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Script from "next/script";

const Introduction = () => {
  var frame1 = [
    "<pre><code>",
    " ",
    " _o",
    "__|-",
    "   >",
    "</code></pre>",
  ].join("\n");
  var frame2 = [
    "<pre><code>",
    " ",
    "    o/",
    "    |__",
    "    |",
    "</code></pre>",
  ].join("\n");

  var frame3 = [
    "<pre><code>",
    " ",
    "   \\o_",
    "  __/",
    "     >",
    "</code></pre>",
  ].join("\n");

  var frame4 = [
    "<pre><code>",
    " ",
    "      ",
    "   \\__/o",
    "   /   \\",
    "</code></pre>",
  ].join("\n");

  var frame5 = [
    "<pre><code>",
    " ",
    "   \\ /",
    "    |",
    "   /o\\",
    "</code></pre>",
  ].join("\n");

  var frame6 = [
    "<pre><code>",
    " ",
    "    --",
    "   /",
    "  o|",
    "</code></pre>",
  ].join("\n");

  var frame7 = [
    "<pre><code>",
    " ",
    "   __o",
    "     |",
    "    <<",
    "</code></pre>",
  ].join("\n");

  var frame8 = [
    "<pre><code>",
    " ",
    "   |o",
    "   /",
    "  |",
    "</code></pre>",
  ].join("\n");

  var frame9 = [
    "<pre><code>",
    " ",
    "   \\__/o",
    "     ",
    "    ",
    "</code></pre>",
  ].join("\n");

  var frame10 = [
    "<pre><code>",
    " ",
    "   \\__/o",
    "     ",
    "    ",
    "</code></pre>",
  ].join("\n");

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

      <span dangerouslySetInnerHTML={{ __html: frame1 }}></span>
      <span dangerouslySetInnerHTML={{ __html: frame2 }}></span>
      <span dangerouslySetInnerHTML={{ __html: frame3 }}></span>
      <span dangerouslySetInnerHTML={{ __html: frame4 }}></span>
      <span dangerouslySetInnerHTML={{ __html: frame5 }}></span>
      <span dangerouslySetInnerHTML={{ __html: frame6 }}></span>
      <span dangerouslySetInnerHTML={{ __html: frame7 }}></span>
      <span dangerouslySetInnerHTML={{ __html: frame8 }}></span>
      <span dangerouslySetInnerHTML={{ __html: frame10 }}></span>
    </section>
  );
};

export default Introduction;
