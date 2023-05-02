import React, { Children, FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Elements: FC<Props> = ({ children }) => {
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
  return <>{mapped}</>;
};

export default Elements;
