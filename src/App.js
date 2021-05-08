import React from "react";
import Login from "./Components/Login/Login";
import Dashbord from "./Components/Dashboard/Dashboard";
import Nav from "./Components/Nav/Nav";
import { connect } from "react-redux";

import "./App.css";

function App({ login }) {
  return (
    <div className="App">
      <Nav></Nav>
      <div>{login ? <Dashbord></Dashbord> : <Login></Login>}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { login: state.LoginReducer.login };
};
export default connect(mapStateToProps)(App);
