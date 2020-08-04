import React, {useEffect} from 'react';
import styled from 'styled-components';
import {MY_PAGE_BORDER, MY_PAGE_BUTTON} from '../../color';
const Block = styled.div`
  width: 200px;
  height: 80px;
  background-color: #FFFFFF;
  margin-bottom: 50px;
  border: 1px solid ${MY_PAGE_BORDER};
  font-size: 26px;
  font-weight: 900;
  justify-content: center;
  display: flex;
  align-items: center;
`
const Button = styled.button`
  width: 200px;
  height: 70px;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  justify-content: center;
  border: 1px solid ${MY_PAGE_BORDER};
  align-items: center;
  font-size: 15px;
  &:hover{background-color: ${MY_PAGE_BUTTON};}
  &:focus{outline: 0;}
`

const ClickButton = styled.button`
  width: 200px;
  height: 70px;
  display: flex;
  flex-direction: column;
  background-color: ${MY_PAGE_BUTTON};
  justify-content: center;
  border: 1px solid ${MY_PAGE_BORDER};
  align-items: center;
  font-size: 15px;
  color: #000000;
  &:hover{background-color: ${MY_PAGE_BUTTON}
  &:focus{outline: 0;}
`

const MenuContainer=styled.div`
  margin-right: 100px;
`

const Menu = ({menuIdx, setMenuIdx}) => {
  return (
    <MenuContainer>
      <Block>내 정보</Block>
      { 
        menuIdx === 0 ?
        <ClickButton>기본 정보</ClickButton> : 
        <Button onClick={(e) => setMenuIdx(0)}>기본 정보</Button> 
      }
      { 
        menuIdx === 1 ? 
        <ClickButton>멘토 인증</ClickButton> : 
        <Button onClick={(e) => setMenuIdx(1)}>멘토 인증</Button> 
      }
      { 
        menuIdx === 2 ? 
        <ClickButton>개인정보 변경</ClickButton> : 
        <Button onClick={(e) => setMenuIdx(2)}>개인정보 변경</Button> 
      }
      { 
        menuIdx === 3 ? 
        <ClickButton>비밀번호 변경</ClickButton> : 
        <Button onClick={(e) => setMenuIdx(3)}>비밀번호 변경</Button> 
      }
      { 
        menuIdx === 4 ? 
        <ClickButton>로그아웃</ClickButton> : 
        <Button onClick={(e) => setMenuIdx(4)}>로그아웃</Button> 
      }
      { 
        menuIdx === 5 ? 
        <ClickButton>회원탈퇴</ClickButton> : 
        <Button onClick={(e) => setMenuIdx(5)}>회원탈퇴</Button> 
      }
    </MenuContainer>
  )
}

export default Menu