import styled from 'styled-components';
import { MY_PAGE_BACKGROUND } from 'color.js';
export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: bold;
  font-weight: 900;
  font-size: 25px;
`;
export const SignUpContents = styled.div`
  width: 500px;
  height: 400px;
  margin-top: 100px;
`;
export const SignUpContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 100%;
  flex-direction: column;
`;

export const Button = styled.button`
  font-size: 13px;
  width: 80px;
  margin-left: 5px;
  background-color: #fff;
  border: 1px solid #000;
`;

export const Form = styled.form`
  line-height: 2em;
  height: 45px;
`;

export const Inputs = styled.input`
  width: 100px;
`;
