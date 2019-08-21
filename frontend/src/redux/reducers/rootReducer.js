import { combineReducers } from "Redux";
import leadReducer from "./leadReducer";
export default combineReducers({
  leads: leadReducer
});
