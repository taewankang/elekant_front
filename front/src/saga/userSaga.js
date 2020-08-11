import {all, fork, put, takeEvery} from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../reducer/user';

function* login(action){
  try {
    yield put({
      type: LOGIN_SUCCESS,
      data: action.data
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE
    });
    alert('Login ERROR');
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