import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { EmployeeReducer } from "./EmployeeReducer";

export const rootReducer = combineReducers({ LoginReducer, EmployeeReducer });
