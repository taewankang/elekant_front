import styled from 'styled-components';
import { MENU_HEIGHT } from 'constant.js';
import { TOP_MENU_COLOR } from 'color.js';

export const Menu = styled.div`
  width: 100%;
  position: fixed;
  height: 55px;
  background-color: ${TOP_MENU_COLOR};
  color: #ffffff;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${MENU_HEIGHT}px) {
    background-color: ${TOP_MENU_COLOR};
  }
`;

export const MenuContainer = styled.div`
  justify-content: space-between;
  width: 90%;
  height: 55px;
  display: flex;
`;

export const MenuList = styled.span`
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${MENU_HEIGHT}px) {
    width: 100%;
    padding: 0px 0px 0px 10px;
    display: flex;
    justify-content: space-between;
  }
`;

export const UserInfo = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-around;
`;

export const MenuButton = styled.button`
  background-color: ${TOP_MENU_COLOR};
  border: 1px solid #ffffff;
  height: 30px;
  color: #ffffff;
  min-width: 75px;
  font-weight: bold;
  border-radius: 7px;
  outline: none;
  cursor: pointer;
`;

export const AppBar = styled.div`
  display: flex;
  align-items: center;
`;

export const AppMenu = styled.div`
  display: flex;
  @media only screen and (min-width: ${MENU_HEIGHT}px) {
    display: none;
  }
`;
