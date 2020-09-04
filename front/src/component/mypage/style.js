import { MY_PAGE_BORDER, BUTTON_COLOR } from 'color.js';
import styled from 'styled-components';
import { MY_PAGE_APP_WIDTH } from 'constant.js';

export const Container = styled.div`
  height: 400px;
  @media only screen and (max-width: ${MY_PAGE_APP_WIDTH}px) {
    width: 100%;
  }
  @media only screen and (min-width: ${MY_PAGE_APP_WIDTH}px) {
    width: 700px;
    margin-right: 10px;
  }
`;

export const Block = styled.div`
  height: 70px;
  padding: 20px;
  display: flex;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid ${MY_PAGE_BORDER};
  @media only screen and (min-width: ${MY_PAGE_APP_WIDTH}px) {
    width: 700px;
    margin-right: 10px;
  }
  @media only screen and(max-width: ${MY_PAGE_APP_WIDTH}px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const Bold = styled.div`
  width: 120px;
  font-weight: 800;
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 20px;
  height: 70px;
  padding: 20px;
  display: flex;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid ${MY_PAGE_BORDER};
  @media only screen and (min-width: ${MY_PAGE_APP_WIDTH}px) {
    width: 700px;
    margin-right: 10px;
  }
  @media only screen and (max-width: ${MY_PAGE_APP_WIDTH}px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  color: #555;
  width: 200px;
  &:focus {
    border-bottom: 1px solid #000000;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const CompleteButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${BUTTON_COLOR};
  color: #ffffff;
  font-weght: 800;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  border: 1px solid ${BUTTON_COLOR};
`;

export const MenuContainer = styled.div`
  margin-right: 100px;
  margin-left: 10px;
  width: 200px;
  min-width: 200px;
`;
