import React from 'react';
import {combineReducers} from 'redux';
const initiateState = {

}

const reducer = (state = initiateState, action) => {
  switch(action.state){


    default:
      return state;
  }
}

const rootreducer = combineReducers({reducer});
export default rootreducer;