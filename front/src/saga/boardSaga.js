import { all, fork, put, takeEvery } from "redux-saga/effects"
import {
  REQUEST_BOARD_DATA, BOARD_DATA_SUCCESS, BOARD_DATA_FAILURE,
  REQUEST_COMMENT_POST, COMMENT_POST_SUCCESS, COMMENT_POST_FAILURE,
  REQUEST_NEW_POST, NEW_POST_SUCCESS, NEW_POST_FAILURE,
  REQUEST_ADD_COMMENT, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from '../reducer/board';

//게시판 정보를 불러오는 함수
function* boardData(action){
  try{
    yield put({
      type: BOARD_DATA_SUCCESS,
      data: action.data
    })
  } catch(e){
    yield put({
      type: BOARD_DATA_FAILURE
    })
  }
}

function* boardDataRequest() {  //게시판 정보 호출 함수
  yield takeEvery(REQUEST_BOARD_DATA, boardData);
}


//댓글 내용 요청주는 함수
function* commentPost(action){
  try{
    yield put({
      type: COMMENT_POST_SUCCESS,
      data: action.data
    })
  } catch {
    yield put({
      type: COMMENT_POST_FAILURE
    })
  }
}

function* addNewCommentRequest(){  //게시판 댓글 불러오기
  yield takeEvery(REQUEST_COMMENT_POST, commentPost)
}

function* addPost(action){
  console.log(action.data);
  try{
    yield put({
      type: NEW_POST_SUCCESS,
      data: action.data
    })
  } catch {
    yield put({
      type: NEW_POST_FAILURE,
    })
  }
}

function* addNewPost() {  //새로운 게시글 등록
  yield takeEvery(REQUEST_NEW_POST, addPost);
}

export default function* boardSaga(){
  yield all([
    fork(boardDataRequest),         // 게시판 글 불러오기
    fork(addNewCommentRequest),      // 게시판 댓글 불러오기
    fork(addNewPost),               // 새로운 글 등록하기
    // fork(addCommentRequest)         //게시글에 답글 달기 - 미정 생각이 필요
  ])
}