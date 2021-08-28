import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const HeaderElement = styled.header`
  width: 100%;
  height: 60px;
  color: var(--main-white);
  background: var(--main-blue);
  & a{
    color: var(--main-white);
  }
`;
const HeaderContainer = styled.div`
  height: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h2`
  font-size: 32px;
`;
const Menu = styled.ul`
  display: flex;
  ${gap("20px")}
`;
const Item = styled.div`
  font-weight: 700;
  &:hover{
    text-decoration: underline;
  }
`;

function Header () {
  return(
    <HeaderElement>
      <HeaderContainer className="container">
        <Logo><Link to="/">Список дел</Link></Logo>
        <Menu>
          <Item><Link to="/"></Link></Item>
        </Menu>
      </HeaderContainer>
    </HeaderElement>
  );
}

export default Header;