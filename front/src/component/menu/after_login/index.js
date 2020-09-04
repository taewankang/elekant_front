import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuContainer,
  MenuList,
  MenuButton,
} from '../before_login/style';
import { UserInfo } from './style';
const link = ['/mentor', '/mentee', '/board/1', '/mypage'];
const name = ['Mento', 'Mentee', 'Board', 'My Page'];
const index = () => {
  return (
    <Menu>
      <MenuContainer>
        <MenuList>
          <Link to="/" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
            로고
          </Link>
        </MenuList>
        <UserInfo>
          {link.map((item, idx) => {
            return (
              <MenuList key={idx}>
                <Link to={item}>
                  <MenuButton>{name[idx]}</MenuButton>
                </Link>
              </MenuList>
            );
          })}
          <MenuList>
            <MenuButton>Logout</MenuButton>
          </MenuList>
        </UserInfo>
      </MenuContainer>
    </Menu>
  );
};

export default index;
