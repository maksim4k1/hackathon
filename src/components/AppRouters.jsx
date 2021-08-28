import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { localReducers, publicRouters } from "../routers/routers";

function AppReducers ({isAuth}) {
  return(
    <Switch>
      {
        isAuth
        ? localReducers.map(({path, component, exact}, index) => {
          return <Route key={index} path={path} component={component} exact={exact} />
        })
        : publicRouters.map(({path, component, exact}, index) => {
          return <Route key={index} path={path} component={component} exact={exact} />
        })
      }
      <Redirect to="/error/404" />
    </Switch>
  );
}

const mapStateToProps = state => ({
  isAuth: state.app.isAuth
});

export default connect(mapStateToProps)(AppReducers);