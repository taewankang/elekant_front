import React, {useState, useCallback} from 'react';
import {MenuOutlined} from '@ant-design/icons';
import {Menu, MenuContainer, MenuList, UserInfo, MenuButton} from './style';

const BeforeLogin = () => {
  const [menu, setMenu] = useState(false);
  const menuClick = useCallback(() => {setMenu(!menu)});

  return (
    <Menu>
      <MenuContainer>
        <MenuList>
          로고
        {/* 화면 줄이면 어플처럼 바뀌게 하려고 했는데 메뉴에 버튼이 두개밖에 
        없어서 나중에 로그인 하고 나서 사용하려고 남겨 놓음 */}
        {/* <AppMenu>
          <AppBar>
            <MenuOutlined onClick={menuClick}/>
          </AppBar>
        </AppMenu> */}
        </MenuList>
        <UserInfo>
          <MenuList>
            <MenuButton>Sign up</MenuButton>
          </MenuList>
          <MenuList>
            <MenuButton>Sign in</MenuButton>
          </MenuList>
        </UserInfo>
      </MenuContainer>
    </Menu>
  )
}

export default BeforeLogin;