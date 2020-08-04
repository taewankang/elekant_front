import React, {useState, useCallback} from 'react';
import {MenuOutlined} from '@ant-design/icons';
import {Menu, MenuContainer, MenuList, UserInfo, MenuButton} from './style';
import {Link} from 'react-router-dom';
const BeforeLogin = () => {
  const [menu, setMenu] = useState(false);
  const menuClick = useCallback(() => {setMenu(!menu)});

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
          <Link to='/signup'>
            <MenuButton>Sign up</MenuButton>
          </Link>
          </MenuList>
          <MenuList>
            <Link to='/login'>
              <MenuButton>Sign in</MenuButton>
            </Link>
          </MenuList>
        </UserInfo>
      </MenuContainer>
    </Menu>
  )
}

export default BeforeLogin;