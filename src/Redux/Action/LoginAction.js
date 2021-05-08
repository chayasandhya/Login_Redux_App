import { LOGIN, ALERT, CLEAR_ALERT } from "../constants";

export function loginAction(username, password) {
  if (username && password) {
    return {
      type: LOGIN,
      payload: {
        username,
        password,
      },
    };
  } else {
    return {
      type: ALERT,
      payload: "Invalid Credentials",
    };
  }
}

export function clearAlert() {
  console.log("clear");
  return {
    type: CLEAR_ALERT,
    payload: null,
  };
}
