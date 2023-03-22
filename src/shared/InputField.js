import React, { useEffect, useRef } from 'react';

function InputField({ id, type, value, onChangeFunction, isFocused, children }) {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);


  return (
    <React.Fragment>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef}
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChangeFunction}
      />

      <p>Searching for a user named: {value}</p>
    </React.Fragment>
  );
}

export default InputField;