import userSaga from './userSaga';
import mentoSaga from './mentoSaga';
import menteeSaga from './menteeSaga';
import boardSaga from './boardSaga';
import {all, fork} from 'redux-saga/effects';
export default function* rootSaga(){
  yield all([
    fork(userSaga),
    // fork(mentoSaga),
    // fork(menteeSaga),
    fork(boardSaga)
  ])
}
