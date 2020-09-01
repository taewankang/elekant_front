import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Title, InputContainer, Input, Button } from './ForgotId';
import { useSelector, useDispatch } from 'react-redux';
const ForgotPwd = () => {
  const [confirm, setConfirm] = useState(false);
  const [info, setInfo] = useState({
    email: '',
    pwd: '',
    confirm: '',
  });

  const onClick = e => {
    e.preventDefault();
    setConfirm(true);
  };

  const onChange = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Title>비밀번호 찾기</Title>
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
      <Button onClick={onClick}>비밀번호 찾기</Button>
    </Container>
  );
};

export default ForgotPwd;
