import React, {useState, useEffect} from "react";
import Menu from "../component/mypage/Menu";
import NormalInfo from "../component/mypage/NormalInfo";
import ChangePassword from "../component/mypage/ChangePassword";
import Exit from "../component/mypage/Exit";
import IdentifyMento from "../component/mypage/IdentifyMento";
import Logout from "../component/mypage/Logout";
import PersonalInfo from "../component/mypage/PersonalInfo";
import styled from "styled-components";
import {MY_PAGE_BUTTON} from "../color";
import {useSelector} from 'react-redux';
const MyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${MY_PAGE_BUTTON};
`

const MyPageContents = styled.div`
  width: 1000px;
  display: flex;
  height: 700px;
  margin-top: 80px;
`

const MyPage = ({history}) => {
  const [menuIdx, setMenuIdx] = useState(0);
  const {isLogin} = useSelector(state => state.reducer);

  useEffect(() => {
    if(!isLogin) {
      alert('로그인이 필요한 기능입니다.');
      history.push('/')
    }
  }, []);

  if(isLogin) {
    return (
      <MyPageContainer>
        <MyPageContents>
          <Menu menuIdx={menuIdx} setMenuIdx={setMenuIdx}/>
          { menuIdx === 0 && <NormalInfo/> }
          { menuIdx === 1 && <IdentifyMento/> }
          { menuIdx === 2 && <PersonalInfo/> }
          { menuIdx === 3 && <ChangePassword/> }
          { menuIdx === 4 && <Logout/> }
          { menuIdx === 5 && <Exit/> }
        </MyPageContents>
      </MyPageContainer>
    )
  } else return (<div></div>)
}

export default MyPage