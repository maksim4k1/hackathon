import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  width: 100%;
  padding: 8px 10px;
  margin: 10px 0 0;
  background: var(--main-white);
  border: 1px solid var(--main-blue);
  border-radius: 10px;
`;

function Input ({name, type, value, onChange}) {
  return(
    <InputElement name={name} type={type} placeholder={name} value={value} onChange={onChange}/>
  );
}

export default Input;