import React from "react";

// import { Container } from './styles';

const Flex: React.FC = ({ children }) => {
  return <div style={{ display: "flex" }}>{children}</div>;
};

export default Flex;
