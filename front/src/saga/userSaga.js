import {all, fork, put, takeEvery} from 'redux-saga/effects';
import { 
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
  CHANGE_USERINFO_REQUEST, CHANGE_USERINFO_SUCCESS, CHANGE_USERINFO_FAILURE,
  WITHDRAWAL_REQUEST, WITHDRAWAL_SUCCESS, WITHDRAWAL_FAILURE,
} from '../reducer/user';
import {URL} from '../constant';
import axios from 'axios';

/* Login */ 
async function loginAPI() {
  await axios.post(URL, { method: 'POST'});
}

function* login(action){
  try {
    yield loginAPI();
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

/* Sign Up */
async function signUpAPI(){
  await axios.post(URL, {method: 'POST'});
}

function* signUp(action) {
  try{
    yield signUpAPI();
    yield put({
      type: SIGN_UP_SUCCESS,
      data: action.data
    });
  } catch(e) {
    yield put({
      type: SIGN_UP_FAILURE,
    })
    alert('SIGN UP ERROR');
  }
}

function* userSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

/* Logout */

function* logout(action) {
  try{
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch(e) {
    yield put({
      type: LOGOUT_FAILURE,
    })
  }
}

function* userLogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

/* Change Info */
async function changeInfoAPI(){
  
}

function* changeInfo(action) {
  try{
    yield changeInfoAPI();
    yield put({
      type: CHANGE_USERINFO_SUCCESS,
      data: action.data
    });
  } catch(e) {
    yield put({
      type: CHANGE_USERINFO_FAILURE,
    });
  }
}

function* userChangeInfo() {
  yield takeEvery(CHANGE_USERINFO_REQUEST, changeInfo);
}


/* Withdrawal */
async function withdrawalAPI() {

}

function* withdrawal(action) {
  try{
    yield withdrawalAPI();
    yield put({
      type: WITHDRAWAL_SUCCESS,
    });
  } catch(e) {
    yield put({
      type: WITHDRAWAL_FAILURE,
    })
  }
}

function* userWithdrawal() {
  yield takeEvery(WITHDRAWAL_REQUEST, withdrawal);
}

export default function* userSaga() {
  yield all([
    fork(userLogin),
    fork(userSignUp),
    fork(userLogout),
    fork(userChangeInfo),
    fork(userWithdrawal)
  ])
}