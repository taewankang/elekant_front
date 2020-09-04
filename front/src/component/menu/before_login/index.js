import React, { useState, useCallback } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Menu, MenuContainer, MenuList, UserInfo, MenuButton } from './style';
import { Link } from 'react-router-dom';
const BeforeLogin = () => {
  return (
    <Menu>
      <MenuContainer>
        <MenuList>
          <Link to="/" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
            로고
          </Link>
        </MenuList>
        <UserInfo>
          <MenuList>
            <Link to="/signup">
              <MenuButton>Sign up</MenuButton>
            </Link>
          </MenuList>
          <MenuList>
            <Link to="/login">
              <MenuButton>Sign in</MenuButton>
            </Link>
          </MenuList>
        </UserInfo>
      </MenuContainer>
    </Menu>
  );
};

export default BeforeLogin;
