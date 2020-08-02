import styled from 'styled-components';
import {MENU_HEIGHT} from '../../../constant'
import {TOP_MENU_COLOR} from '../../../color'

export const Menu = styled.div`
  width: 100%;
  height: 55px;
  background-color: ${TOP_MENU_COLOR};
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${MENU_HEIGHT}px) {
    background-color: ${TOP_MENU_COLOR};
}`
    
export const MenuContainer = styled.div`
  justify-content: space-between;
  width: 90%;
  height: 55px;
  display: flex;
`
  
export const MenuList = styled.span`
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${MENU_HEIGHT}px){
    width: 100%;
    padding: 0px 0px 0px 10px;
    display: flex;
    justify-content: space-between;
  }  
`

export const UserInfo = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-around;
`

export const MenuButton = styled.button`
  background-color: ${TOP_MENU_COLOR};
  border: 1px solid #FFFFFF;
  height: 30px;
  color: #FFFFFF;
  font-weight: bold;
  border-radius: 7px;
`

export const AppBar = styled.div`
  display: flex;
  align-items: center;
`

export const AppMenu = styled.div`
  display: flex;
  @media only screen and (min-width: ${MENU_HEIGHT}px){
    display: none;
  }
`

