import React, { useEffect, useState } from "react";

const Cartwheel = () => {
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
    "    /",
    "   |",
    "   o\\",
    "    ",
    "</code></pre>",
  ].join("\n");

  var frame11 = [
    "<pre><code>",
    "    ",
    "  o____",
    "  /",
    "    ",
    "</code></pre>",
  ].join("\n");

  var frame12 = [
    "<pre><code>",
    " ",
    "   __o",
    "      \\",
    "     <<",
    "</code></pre>",
  ].join("\n");

  var frame13 = [
    "<pre><code>",
    " ",
    "    o/",
    "    |",
    "   < \\",
    "</code></pre>",
  ].join("\n");

  var still = [
    "<pre><code>",
    " ",
    "    o",
    "    |",
    "    |",
    "</code></pre>",
  ].join("\n");

  const frames = [
    still,
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
    frame9,
    frame10,
    frame11,
    frame12,
    frame13,
    still,
  ];

  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(currentFrame);
      console.log("frame");
      if (currentFrame === frames.length - 1) {
        setCurrentFrame(0);
      } else {
        setCurrentFrame((prev) => prev + 1);
      }
    }, 500);
  }, [currentFrame, frames.length]);

  return (
    <span
      dangerouslySetInnerHTML={{ __html: frames[currentFrame] }}
      className="absolute bottom-0 left-0 text-xl"
    ></span>
  );
};

export default Cartwheel;
