import React, {useState, useEffect} from "react";
import VerticalMenu from "../component/mypage/VerticalMenu";
import NormalInfo from "../component/mypage/NormalInfo";
import ChangePassword from "../component/mypage/ChangePassword";
import Exit from "../component/mypage/Exit";
import IdentifyMento from "../component/mypage/IdentifyMento";
import Logout from "../component/mypage/Logout";
import PersonalInfo from "../component/mypage/PersonalInfo";
import styled from "styled-components";
import {MY_PAGE_BACKGROUND} from "../color";
import {useSelector} from 'react-redux';
import {MY_PAGE_APP_WIDTH} from '../constant';
import HorizontalMenu from '../component/mypage/HorizontalMenu';

const MyPageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: auto;
  background-color: ${MY_PAGE_BACKGROUND};
  width: 100%;
  // 화면이 640보다 작을 때
  @media only screen and (max-width: ${MY_PAGE_APP_WIDTH}px){   
    justify-content: center;
    width: 100%;
  }

  // 화면이 640보다 클 때
  @media only screen and (min-width: ${MY_PAGE_APP_WIDTH}px){
    width: 100%;
    overflow-x: auto;
  }

  // 화면이 1020보다 클 때
  @media only screen and (min-width: 1020px){
    justify-content: center;
  }
`

const MyPageContents = styled.div`
  width: 1000px;
  display: flex;
  height: 700px;
  margin-top: 80px;

  //화면이 640보다 작을 때
  @media only screen and (max-width: ${MY_PAGE_APP_WIDTH}px){
    width: 100%;
    flex-direction: column;
  }

  //화면이 640보다 클 때
  @media only screen and (min-width: ${MY_PAGE_APP_WIDTH + 1}px){
    overflow-x: auto;
    width: 100%;
    min-width: 1020px;
  }
  
  //화면이 1020보다 클 때
  @media only screen and (min-width: 1020px){
    width: 1020px;
  }

`

const VerticalMenuContainer = styled.div`
  @media only screen and (max-width: ${MY_PAGE_APP_WIDTH}px){
    display: none;
  }
`

const HorizontalMenuContainer = styled.div`
  @media only screen and (min-width: ${MY_PAGE_APP_WIDTH + 1}px){
    display: none;
  }
`

const MyPage = ({history}) => {
  const [menuIdx, setMenuIdx] = useState(0);
  const {isLogin} = useSelector(state => state.user);

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
          <VerticalMenuContainer>
            <VerticalMenu menuIdx={menuIdx} setMenuIdx={setMenuIdx}/>
          </VerticalMenuContainer>
          <HorizontalMenuContainer>
            <HorizontalMenu menuIdx={menuIdx} setMenuIdx={setMenuIdx}/>
          </HorizontalMenuContainer>
          { menuIdx === 0 && <NormalInfo /> }
          { menuIdx === 1 && <IdentifyMento /> }
          { menuIdx === 2 && <PersonalInfo /> }
          { menuIdx === 3 && <ChangePassword /> }
          { menuIdx === 4 && <Logout history={history}/> }
          { menuIdx === 5 && <Exit history={history}/> }
        </MyPageContents>
      </MyPageContainer>
    )
  } else return (<div></div>)
}

export default MyPage