import React from "react";

// import { Container } from './styles';

const Flex: React.FC<{ style?: Object }> = ({ children, style }) => {
  return <div style={{ display: "flex", ...style }}>{children}</div>;
};

export default Flex;
