import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import WeekItem from "./WeekItem";

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function WeekList ({weekDays}) {
  return(
    <List>
      {
        weekDays.map(day => {
          let weekday;
          switch(day.weekDay){
            case 1: weekday = "ПН"; break;
            case 2: weekday = "ВТ"; break;
            case 3: weekday = "СР"; break;
            case 4: weekday = "ЧТ"; break;
            case 5: weekday = "ПТ"; break;
            case 6: weekday = "СБ"; break;
            case 7: weekday = "ВС"; break;
            default: weekday = "ПН";
          }
          return <WeekItem key={day.weekDay} id={day.weekDay} weekDay={weekday} date={day.date} active={day.isActive}/>
        })
      }
    </List>
  );
}

const mapStateToProps = state => ({
  weekDays: state.todolist.weekDays
});

export default connect(mapStateToProps)(WeekList);