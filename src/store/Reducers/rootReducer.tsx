import { combineReducers } from "redux";
import { handleReducer } from "./app";

// gom nhóm các reducer lại
export const rootReducer = combineReducers({
  app: handleReducer,
});

