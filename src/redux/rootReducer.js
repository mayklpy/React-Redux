import { combineReducers } from "redux";
import userReducer from "./user/reducers";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
