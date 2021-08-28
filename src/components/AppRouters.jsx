import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routers from "../routers/routers";

function AppReducers () {
  return(
    <Switch>
      {
        routers.map(({path, component, exact}, index) => {
          return <Route key={index} path={path} component={component} exact={exact} />
        })
      }
      <Redirect to="/error/404" />
    </Switch>
  );
}

export default AppReducers;