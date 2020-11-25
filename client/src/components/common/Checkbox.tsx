import React from "react";
import { Input, Container } from "./Checkbox.styles";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerStyle?: React.CSSProperties;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  containerStyle,
  ...props
}) => {
  return (
    <Container style={containerStyle}>
      <Input type="checkbox" {...props} />
      <span>{label}</span>
    </Container>
  );
};

export default Checkbox;
