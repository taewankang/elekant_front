import React, { useState, useEffect } from 'react';
import VerticalMenu from '../component/mypage/VerticalMenu';
import NormalInfo from '../component/mypage/NormalInfo';
import ChangePassword from '../component/mypage/ChangePassword';
import Exit from '../component/mypage/Exit';
import IdentifyMento from '../component/mypage/IdentifyMento';
import styled from 'styled-components';
import { MY_PAGE_BACKGROUND } from 'color.js';
import { useSelector } from 'react-redux';
import { MY_PAGE_APP_WIDTH } from 'constant.js';

const MyPageContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${MY_PAGE_BACKGROUND};
  width: 100%;
  justify-content: center;
`;

const MyPageContents = styled.div`
  width: 1000px;
  display: flex;
  height: 700px;
  margin-top: 100px;
  width: 1020px;
`;

const VerticalMenuContainer = styled.div`
  @media only screen and (max-width: ${MY_PAGE_APP_WIDTH}px) {
    display: none;
  }
`;

const HorizontalMenuContainer = styled.div`
  @media only screen and (min-width: ${MY_PAGE_APP_WIDTH + 1}px) {
    display: none;
  }
`;

const MyPage = ({ history }) => {
  const [menuIdx, setMenuIdx] = useState(0);
  const { isLogin } = useSelector(state => state.user);

  useEffect(() => {
    if (!isLogin) {
      alert('로그인이 필요한 기능입니다.');
      history.push('/');
    }
  }, []);

  if (isLogin) {
    return (
      <MyPageContainer>
        <MyPageContents>
          <VerticalMenuContainer>
            <VerticalMenu menuIdx={menuIdx} setMenuIdx={setMenuIdx} />
          </VerticalMenuContainer>
          {menuIdx === 0 && <NormalInfo />}
          {menuIdx === 1 && <IdentifyMento />}
          {menuIdx === 2 && <ChangePassword />}
          {menuIdx === 3 && <Exit history={history} />}
        </MyPageContents>
      </MyPageContainer>
    );
  } else return <div></div>;
};

export default MyPage;
