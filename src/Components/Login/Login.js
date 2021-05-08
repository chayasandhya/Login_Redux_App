import React, { useState } from "react";
import Alert from "../Alert/Alert";
import "./Login.css";

import { connect } from "react-redux";
import { loginAction } from "../../Redux/Action/LoginAction";

function Login({ loginAction, alertMsg }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login_container">
      {alertMsg ? <Alert /> : null}

      <label for="email">UserName</label>
      <input
        onChange={(e) => setUserName(e.target.value)}
        type="email"
        name="email"
      />
      <label for="password">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
      />
      <button
        className="login_btn"
        onClick={() => loginAction(userName, password)}
      >
        Login
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { alertMsg: state.LoginReducer.alertMsg };
};
export default connect(mapStateToProps, { loginAction })(Login);
