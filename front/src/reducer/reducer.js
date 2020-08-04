import { combineReducers } from "redux";
const initiateState = {
  isLogin: true, //로그인 여부를 확인
  id: "태완짱짱",
  name: '강태완',
  nickname: 'clever',
  school: 'seoul national univ',
  mail: 'abcde@naver.com'
};

export const LOGIN_REQUEST = "LOGIN_REQUEST";

const reducer = (state = initiateState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLogin: true,
      };

    default:
      return state;
  }
};

const rootreducer = combineReducers({ reducer });
export default rootreducer;
