import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { MY_PAGE_BACKGROUND, MY_PAGE_BORDER } from 'color.js';

const HorizontalMenuContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid ${MY_PAGE_BORDER};
  background-color: ${MY_PAGE_BACKGROUND};
`;

const HorizontalMenu = ({ menuIdx, setMenuIdx }) => {
  return (
    <HorizontalMenuContainer>
      <Menu
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
        }}
        selectedKeys={menuIdx + ''}
        mode="horizontal"
      >
        <Menu.Item
          style={{ margin: '0px', padding: '0px' }}
          key="0"
          onClick={() => setMenuIdx(0)}
        >
          기본 정보
        </Menu.Item>
        <Menu.Item
          style={{ margin: '0px', padding: '0px' }}
          key="1"
          onClick={() => setMenuIdx(1)}
        >
          멘토 인증
        </Menu.Item>
        <Menu.Item
          style={{ margin: '0px', padding: '0px' }}
          key="2"
          onClick={() => setMenuIdx(2)}
        >
          비밀번호 변경
        </Menu.Item>
        <Menu.Item
          style={{ margin: '0px', padding: '0px' }}
          key="3"
          onClick={() => setMenuIdx(3)}
        >
          로그아웃
        </Menu.Item>
        <Menu.Item
          style={{ margin: '0px', padding: '0px' }}
          key="4"
          onClick={() => setMenuIdx(4)}
        >
          회원탈퇴
        </Menu.Item>
      </Menu>
    </HorizontalMenuContainer>
  );
};

export default HorizontalMenu;
