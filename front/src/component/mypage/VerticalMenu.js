//마이 페이지 - 좌측 메뉴
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { MY_PAGE_BORDER, MY_PAGE_BACKGROUND } from 'color.js';
import { MenuContainer } from './style';
const nameList = ['기본 정보', '멘토 인증', '비밀번호 변경', '회원탈퇴'];
const Block = styled.div`
  width: 200px;
  height: 80px;
  margin-bottom: 50px;
  background: ${MY_PAGE_BACKGROUND};
  border: 1px solid ${MY_PAGE_BORDER};
  font-size: 26px;
  font-weight: 900;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const ClickButton = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.menuIdx === props.idx ? '#fff' : { MY_PAGE_BACKGROUND }};
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #000000;
  outline: none;
`;

const VerticalMenu = ({ menuIdx, setMenuIdx }) => {
  const onClick = useCallback((e, idx) => {
    e.preventDefault();
    setMenuIdx(idx);
  });

  return (
    <MenuContainer>
      <Block>내 정보</Block>
      {nameList.map((item, idx) => {
        return (
          <ClickButton
            menuIdx={menuIdx}
            idx={idx}
            onClick={e => onClick(e, idx)}
            key={idx}
          >
            {item}
          </ClickButton>
        );
      })}
    </MenuContainer>
  );
};

export default VerticalMenu;
