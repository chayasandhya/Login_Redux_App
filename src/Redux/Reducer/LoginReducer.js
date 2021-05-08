import { LOGIN, ALERT, CLEAR_ALERT } from "../constants";

const initialUserState = {
  username: "hruday@gmail.com",
  password: "hruday123",
  login: false,
  alertMsg: null,
};

export function LoginReducer(state = initialUserState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN: {
      const aState = { ...state };
      if (
        payload.username == state.username &&
        payload.password == state.password
      ) {
        console.log("true");
        aState.login = true;
      } else {
        console.log("false");
        aState.login = false;
        aState.alertMsg = "Invalid Credentials !!";
      }
      return aState;
    }
    case ALERT: {
      return { ...state, alertMsg: payload };
    }
    case CLEAR_ALERT: {
      return { ...state, alertMsg: null };
    }
    default: {
      return state;
    }
  }
}
