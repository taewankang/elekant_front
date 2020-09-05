import { all, fork, put, takeEvery } from 'redux-saga/effects';
import {
  CHECK_ID_REQUEST,
  CHECK_ID_SUCCESS,
  CHECK_ID_FAILURE,
  CHECK_NICKNAME_REQUEST,
  CHECK_NICKNAME_SUCCESS,
  CHECK_NICKNAME_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CHANGE_USERINFO_REQUEST,
  CHANGE_USERINFO_SUCCESS,
  CHANGE_USERINFO_FAILURE,
  WITHDRAWAL_REQUEST,
  WITHDRAWAL_SUCCESS,
  WITHDRAWAL_FAILURE,
} from '../reducer/user';
import { URL } from '../constant';
import axios from 'axios';

/* Login */
async function loginAPI() {
  await axios.post(URL, { method: 'POST' });
}

function* login(action) {
  try {
    // yield loginAPI();
    yield put({
      type: LOGIN_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
    });
    alert('Login ERROR');
  }
}

function* userLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

/* Sign Up */
async function signupAPI() {
  await axios.post(URL, { method: 'POST' });
}

function* signup(action) {
  try {
    // yield signUpAPI();
    yield put({
      type: SIGN_UP_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: SIGN_UP_FAILURE,
    });
    alert('SIGN UP ERROR');
  }
}

function* userSignup() {
  yield takeEvery(SIGN_UP_REQUEST, signup);
}

/* Logout */

function* logout(action) {
  try {
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILURE,
    });
  }
}

function* userLogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

/* Change Info */
async function changeInfoAPI() {}

function* changeInfo(action) {
  try {
    yield changeInfoAPI();
    yield put({
      type: CHANGE_USERINFO_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: CHANGE_USERINFO_FAILURE,
    });
  }
}

function* userChangeInfo() {
  yield takeEvery(CHANGE_USERINFO_REQUEST, changeInfo);
}

/* Withdrawal */
async function withdrawalAPI() {}

function* withdrawal(action) {
  try {
    yield withdrawalAPI();
    yield put({
      type: WITHDRAWAL_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: WITHDRAWAL_FAILURE,
    });
  }
}

function* userWithdrawal() {
  yield takeEvery(WITHDRAWAL_REQUEST, withdrawal);
}

/* 아이디 중복 확인 */
async function signupCheckIdAPI() {}

function* signupCheckId(action) {
  try {
    // yield signupCheckIdAPI();
    yield put({
      type: CHECK_ID_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: CHECK_ID_FAILURE,
    });
  }
}

function* userIdCheck() {
  yield takeEvery(CHECK_ID_REQUEST, signupCheckId);
}

/* nickname 중복 확인 */
async function signupCheckNicknameAPI() {}

function* signupCheckNickname(action) {
  try {
    // yield signupCheckNicknameAPI();
    yield put({
      type: CHECK_NICKNAME_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: CHECK_NICKNAME_FAILURE,
    });
  }
}

function* userNicknameCheck() {
  yield takeEvery(CHECK_NICKNAME_REQUEST, signupCheckNickname);
}

export default function* userSaga() {
  yield all([
    fork(userLogin),
    fork(userSignup),
    fork(userLogout),
    fork(userChangeInfo),
    fork(userWithdrawal),
    fork(userIdCheck),
    fork(userNicknameCheck),
  ]);
}
