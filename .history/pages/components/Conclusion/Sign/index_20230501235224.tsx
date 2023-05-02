import React from "react";

const Sign = () => {
  var sign = [
    "<pre><code>",
    "|-----------------|",
    "|                 |",
    "|    THANK YOU    |",
    "|    FOR          | ",
    "|    READING      |",
    "|                 |",
    "|_________________| ",
    "(__/) || ",
    "(•ㅅ•) || ",
    "/ 　 づ",

    "</code></pre>",
  ].join("\n");

  return (
    <span
      dangerouslySetInnerHTML={{ __html: sign }}
      className="text-xl text-green-300"
    ></span>
  );
};

export default Sign;
