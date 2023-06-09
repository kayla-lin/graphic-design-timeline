import React from "react";

const Sign = () => {
  var sign = [
    "<pre><code>",
    "         \\|||||/        ",
    "         ( O O )         ",
    "|--ooO-----(_)----------|",
    "|                       |",
    "|    Also there was     |",
    "|  lots of ascii art!   |",
    "|                       |",
    "|------------------Ooo--|",
    "         |__||__|        ",
    "          ||  ||         ",
    "          ||  ||         ",
    "         ooO  Ooo        ",
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
