import React from "react";

import { Container } from "./Spinner.styles";

const Spinner: React.FC<{ style?: React.CSSProperties }> = (props) => {
  return <Container {...props} />;
};

export default Spinner;
