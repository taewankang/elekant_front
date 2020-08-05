import { combineReducers } from "redux";
const initiateState = {
  isLogin: true, //로그인 여부를 확인
  id: "태완짱짱",
  name: "강태완",
  nickname: "clever",
  school: "seoul national univ",
  mail: "abcde@naver.com"
};

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";


const reducer = (state = initiateState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLogin: true,
      };
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
    case LOGOUT_REQUEST:
    case LOGOUT_SUCCESS:
    case LOGOUT_FAILURE:
    default:
      return state;
  }
};

const rootreducer = combineReducers({ reducer });
export default rootreducer;
