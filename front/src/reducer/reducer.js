import React from 'react';
import {combineReducers} from 'redux';
const initiateState = {
  isLogin: false,   //로그인 여부를 확인
}

const reducer = (state = initiateState, action) => {
  switch(action.state){


    default:
      return state;
  }
}

const rootreducer = combineReducers({reducer});
export default rootreducer;