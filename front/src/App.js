import React from "react";
import BeforeLogin from "./component/menu/before_login/";
import AfterLogin from './component/menu/after_login';
import Home from './page/Home';
import {useDispatch, useSelector} from 'react-redux';
import SignUp from './page/SignUp';
import Login from './page/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = ({history}) => {
  const {isLogin} = useSelector(state => state.reducer);
  return (
    <div>
      {isLogin ? <AfterLogin /> : <BeforeLogin />}
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>    //메인 페이지
          <Route path='/signup' component={SignUp}/>  //회원가입 페이지
          <Route path='/login' component={Login}/>    //로그인 화면  
        </Switch>
      </Router>
    </div>
  );
}

const LoginException = ({history}) => {
  alert('이미 로그인 하였습니다.');
  history.replace('/');
}

export default App;
