import { combineReducers } from "Redux";
import leadReducer from "./leadReducer";
import errorReducer from "./errorReducer";
import msgReducer from "./msgReducer";
export default combineReducers({
  leads: leadReducer,
  errors: errorReducer,
  messages: msgReducer
});
