import React from "react";

const Introduction = () => {
  return (
    <section className="h-screen w-screen text-white flex flex-col justify-center items-center">
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
      <code>{`
              +--------+   +-------+    +-------+
              |        |   + ditaa +    |       |
              |  Text  |   +-------+    |diagram|
              |Document|   |!magic!|    |       |
              |        |   |       |    |       |
              +---+----+   +-------+    +-------+
            `}</code>
    </section>
  );
};

export default Introduction;
