import React, { useState, useEffect } from "react";

import { Input } from "./TextInput.styles";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  ref?: React.RefObject<HTMLInputElement>;
  type?: "t9";
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, value = "", style, ...props }, forwardRef) => {
    const [text, setText] = useState(value);

    useEffect(() => {
      setText(value);
    }, [value]);

    return (
      <>
        <label>
          <div>{label}</div>
          <Input
            value={value || text}
            onKeyPress={(e) => {
              if (props.type === "t9") {
                let re = new RegExp(/[2-9]/g);
                if (!re.test(e.key)) {
                  e.preventDefault();
                }
              }
            }}
            onChange={(e) => {
              setText(e.target.value);
              if (props.onChange) {
                props.onChange(e);
              }
            }}
            ref={forwardRef}
            {...props}
          />
        </label>
      </>
    );
  }
);

export default TextInput;
