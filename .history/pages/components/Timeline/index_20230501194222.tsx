import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Timeline: FC<Props> = ({ children }) => {
  return <section className="container mx-auto"></section>;
};

export default Timeline;
