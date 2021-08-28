import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logOutAction } from "../../../redux/actions/appActions";
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

function Header ({isAuth, logout}) {
  return(
    <HeaderElement>
      <HeaderContainer className="container">
        <Logo><Link to="/">Заметки студента</Link></Logo>
        <Menu>
          {
            isAuth
            ? <Item><button onClick={logout}>Выйти</button></Item>
            : ""
          }
        </Menu>
      </HeaderContainer>
    </HeaderElement>
  );
}

const mapStateToProps = state => ({
  isAuth: state.app.user.isAuth
});

const mapDispatchToProps = {
  logout: logOutAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);