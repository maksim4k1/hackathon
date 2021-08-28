import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";

const FormElement = styled.form`
  max-width: 400px;
  padding: 50px 30px 40px;
  margin: 0 auto;
  background: var(--main-grey);
`;
const Title = styled.h3`
  font-size: 28px;
  text-align: center;
`;

function Form ({inputs, inputHandler, formHandler, title}) {
  return(
    <FormElement onSubmit={formHandler}>
      <Title>{title}</Title>
      {
        inputs.map((input, index) => {
          return <Input key={index} name={input.name} placeholder={input.placeholder} value={input.value} onChange={inputHandler}/>
        })
      }
      <Button type="submit">{title}</Button>
    </FormElement>
  );
}

export default Form;