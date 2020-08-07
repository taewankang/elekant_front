import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Menu, MenuContainer, MenuList, MenuButton} from '../before_login/style';
import {UserInfo} from './style';
import {useSelector} from 'react-redux';

const index = () => {
    return (
        <Menu>
        <MenuContainer>
          <MenuList><Link to='/' style={{textDecoration:'none', color: '#FFFFFF'}}>로고</Link></MenuList>
          {/* 화면 줄이면 어플처럼 바뀌게 하려고 했는데 메뉴에 버튼이 두개밖에 
          없어서 나중에 로그인 하고 나서 사용하려고 남겨 놓음 */}
          {/* <AppMenu>
            <AppBar>
              <MenuOutlined onClick={menuClick}/>
            </AppBar>
          </AppMenu> */}
          <UserInfo>
            <MenuList>
            <Link to='/mento'>
              <MenuButton>Mento</MenuButton>
            </Link>
            </MenuList>
            <MenuList>
              <Link to='/mentee'>
                <MenuButton>Mentee</MenuButton>
              </Link>
            </MenuList>
            <MenuList>
              <Link to='/board/1'>
                <MenuButton>board</MenuButton>
              </Link>
            </MenuList>
            <MenuList>
              <Link to='/mypage'>
                <MenuButton>My Page</MenuButton>
              </Link>
            </MenuList>
          </UserInfo>
        </MenuContainer>
      </Menu>
    )
}

export default index