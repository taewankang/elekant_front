import React from 'react';
import BeforeLogin from './component/menu/before_login/';
import AfterLogin from './component/menu/after_login';
import Home from './page/Home';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './page/SignUp';
import Login from './page/Login';
import Mentor from './page/Mentor';
import Mentee from './page/Mentee';
import BoardMain from './page/BoardMain';
import MyPage from './page/MyPage';
import Post from './page/Post';
import BoardDetail from './page/BoardDetail';
import ForgotId from './page/ForgotId';
import ForgotPwd from './page/ForgotPwd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  const { isLogin } = useSelector(state => state.user);
  return (
    <div style={{ margin: '0px' }}>
      <Router>
        {isLogin ? <AfterLogin /> : <BeforeLogin />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/mentor" component={Mentor} />
          <Route path="/mentee" component={Mentee} />
          <Route path="/board/post" component={Post} />
          <Route path="/board/detail/:id" component={BoardDetail} />
          <Route path="/board" component={BoardMain} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/forgotId" component={ForgotId} />
          <Route path="/forgotPwd" component={ForgotPwd} />
        </Switch>
      </Router> 
    </div>
  );
};

export default App;
