import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setActiveDayAction } from "../redux/actions/action";
import { gap } from "../styles/mixins";

const Item = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  flex-flow: column;
  ${gap("3px")}
  justify-content: center;
  align-items: center;
  background: var(--main-white);
  border: 2px solid var(--main-grey);
  border-radius: 10px;
  &:hover{
    background: var(--main-grey);
  }
`;
const Day = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
const Date = styled.div`
  font-size: 12px;
`;

function WeekItem ({id, weekDay, date, active, setActiveDay}) {
  return(
    <li onClick={() => setActiveDay(id)}>
      <Item style={active ? {background: "var(--main-green)", border: "none", color: "var(--main-white"} : {}}>
        <Day>{weekDay}</Day>
        <Date>{date}</Date>
      </Item>
    </li>
  );
}

const mapDispatchToProps = {
  setActiveDay: setActiveDayAction
}

export default connect(null, mapDispatchToProps)(WeekItem);