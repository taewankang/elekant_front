import { combineReducers } from "redux";
import { user } from "./user";
import { mento } from "./mento";
import { mentee } from "./mentee";
import { board } from "./board";

const rootreducer = combineReducers({
  user,
  mento,
  mentee,
  board,
});
export default rootreducer;
