import { all, fork, put, takeEvery } from "redux-saga/effects"
import {
  BOARD_DATA_REQUEST, BOARD_DATA_SUCCESS, BOARD_DATA_FAILURE,
  COMMENT_POST_REQUEST, COMMENT_POST_SUCCESS, COMMENT_POST_FAILURE,
  NEW_POST_REQUEST, NEW_POST_SUCCESS, NEW_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from '../reducer/board';

//게시판 정보를 불러오는 함수
async function boardDataAPI(){

}

function* boardData(action){
  try{
    yield boardDataAPI();
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

function* boardDataRequest() {  
  yield takeEvery(BOARD_DATA_REQUEST, boardData);
}


//게시판 댓글(BoardDetail)
async function commentPostAPI(){

}

function* commentPost(action){
  try{
    // yield commentPostAPI();
    yield put({
      type: COMMENT_POST_SUCCESS,
      data: action.data
    })
  } catch(e) {
    console.log(e)
    yield put({
      type: COMMENT_POST_FAILURE
    })
  }
}

function* addNewCommentRequest(){  
  yield takeEvery(COMMENT_POST_REQUEST, commentPost)
}

/* 새로운 글 등록 */
async function addPostAPI(){

}

function* addPost(action){
  try{
    yield addPostAPI();
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

function* addNewPost() { 
  yield takeEvery(NEW_POST_REQUEST, addPost);
}

export default function* boardSaga(){
  yield all([
    fork(boardDataRequest),         // 게시판 글 불러오기
    fork(addNewCommentRequest),      // 게시판 댓글 불러오기
    fork(addNewPost),               // 새로운 글 등록하기
    // fork(addCommentRequest)         //게시글에 답글 달기 - 미정 생각이 필요
  ])
}