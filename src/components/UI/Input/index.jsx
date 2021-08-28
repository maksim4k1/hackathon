import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0 0;
  background: var(--main-white);
  border: 1px solid var(--main-blue);
`;

function Input ({name, value, onChange}) {
  return(
    <InputElement name={name} placeholder={name} value={value} onChange={onChange}/>
  );
}

export default Input;