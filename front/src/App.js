import React from "react";
import BeforeLogin from "./component/menu/before_login/";
import AfterLogin from "./component/menu/after_login";
import Home from "./page/Home";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import Mento from "./page/Mentor";
import Mentee from "./page/Mentee";
import Board from "./page/Board";
import MyPage from "./page/MyPage";
import Post from "./page/Post";
import BoardDetail from "./page/BoardDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  const { isLogin } = useSelector((state) => state.user);
  return (
    <div style={{overflowY: 'hidden'}}>
      <Router>
        {isLogin ? <AfterLogin /> : <BeforeLogin />}
        <Switch>
          <Route exact path="/" component={Home} /> //메인 페이지
          <Route path="/signup" component={SignUp} /> //회원가입 페이지
          <Route path="/login" component={Login} /> //로그인 화면
          <Route exact path="/mentor" component={Mento} /> //멘토 페이지
          <Route path="/mentee" component={Mentee} /> //멘티 페이지
          <Route path='/board/post' component={Post} /> //게시판에 새로운 글 쓰기
          <Route path='/board/detail/:id' component={BoardDetail} />   //게시판 상세 페이지
          <Route path="/board" component={Board} /> //게시판 화면
          <Route path="/mypage" component={MyPage} /> //게시판 화면
        </Switch>
      </Router>
    </div>
  );
};

export default App;
