import React, { useState } from 'react';
import styled from 'styled-components';
import { BUTTON_COLOR } from '../color';
import { useSelector, useDispatch } from 'react-redux';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 3rem;
`;

export const InputContainer = styled.div`
  width: 400px;
  height: 32px;
  margin: 10px 0px;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  border: 1px solid rgb(217, 217, 217);
  color: rgb(217, 217, 217);
`;

export const Button = styled.button`
  background-color: ${BUTTON_COLOR};
  margin-top: 20px;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
  border: none;
  width: 100px;
  height: 32px;
  border: 1px solid #000;
`;

const ForgotId = () => {
  const [info, setInfo] = useState({
    email: '',
    pwd: '',
    confirm: '',
  });

  const onChange = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Title>아이디 찾기</Title>
      <InputContainer>
        <Input
          value={info.email}
          placeholder="이메일"
          name="email"
          onChange={onChange}
        />
      </InputContainer>
      <InputContainer>
        <Input
          value={info.pwd}
          placeholder="이름"
          name="pwd"
          onChange={onChange}
        />
      </InputContainer>
      <Button onClick={onClick}>아이디 찾기</Button>
    </Container>
  );
};

export default ForgotId;
