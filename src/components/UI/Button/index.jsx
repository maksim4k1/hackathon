import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  display: block;
  padding: 10px 40px;
  margin: 20px auto 0;
  background: var(--main-white);
  border: 2px solid var(--main-blue);
  border-radius: 10px;
  &:hover{
    color: var(--main-white);
    background: var(--main-blue);
  }
`;

function Button (props) {
  return(
    <ButtonElement {...props}>
      {props.children}
    </ButtonElement>
  );
}

export default Button;