import {combineReducers} from 'redux';
const initiateState = {
  isLogin: false,   //로그인 여부를 확인
  id: 'hho',
  password: 'haha',
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';

const reducer = (state = initiateState, action) => {
  switch(action.type){
    case LOGIN_REQUEST:
      return {
        ...state,
        isLogin: true,
      }


    default:
      return state;
  }
}

const rootreducer = combineReducers({reducer});
export default rootreducer;