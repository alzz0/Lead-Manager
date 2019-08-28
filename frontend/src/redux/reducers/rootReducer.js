import { combineReducers } from "Redux";
import leadReducer from "./leadReducer";
import errorReducer from "./errorReducer";
import msgReducer from "./msgReducer";
import authReducer from "./authReducer";
export default combineReducers({
  leads: leadReducer,
  errors: errorReducer,
  messages: msgReducer,
  auth: authReducer
});
