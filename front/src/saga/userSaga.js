import {all, fork, put, takeEvery} from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../reducer/user';

function* login(action){
  console.log('this is action');
  console.log(action);
  try {
    yield put({
      type: LOGIN_SUCCESS,
      data: action.data
    });
  } catch (e) {
    console.log(e)
    yield put({
      type: LOGIN_FAILURE
    });
  }
}

function* userLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

export default function* userSaga() {
  yield all([
    fork(userLogin),
  ])
}