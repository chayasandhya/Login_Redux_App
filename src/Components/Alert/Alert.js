import React, { useEffect } from "react";
import "./Alert.css";
import { connect } from "react-redux";
import { clearAlert } from "../../Redux/Action/LoginAction";

function Alert({ alertMsg, clearAlert }) {
  useEffect(() => {
    setTimeout(() => {
      clearAlert();
    }, 2500);
  }, [alertMsg]);
  return (
    <div className="alert">
      <h2>{alertMsg}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { alertMsg: state.LoginReducer.alertMsg };
};
export default connect(mapStateToProps, { clearAlert })(Alert);
