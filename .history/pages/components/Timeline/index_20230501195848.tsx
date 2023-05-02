import React, { Children, FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Timeline: FC<Props> = ({ children }) => {
  const mapped = Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props,
        index,
        isFirst: index === 0,
        isLast: !Array.isArray(children) || index === children.length - 1,
      });
    }
    return null;
  });

  return (
    <section className="container mx-auto flex flex-col">
      <span className="h-100 w-2 bg-red-50" />
      {mapped}
    </section>
  );
};

export default Timeline;