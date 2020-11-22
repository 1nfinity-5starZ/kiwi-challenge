import React, { useState, useEffect } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  ref?: React.RefObject<HTMLInputElement>;
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
          <input
            value={value || text}
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
