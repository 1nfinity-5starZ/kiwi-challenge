import React from "react";

import { Container } from "./Button.styles";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
