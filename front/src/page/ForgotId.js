import React, { useState } from 'react';
import styled from 'styled-components';

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

export const ConfirmEmail = styled.div`
  visibility: ${props => (props.confirm ? 'visible' : 'hidden')};
`;

const ForgotId = () => {
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
      <Title>아이디 찾기</Title>
      <div>
        <label>이메일:</label>
        <input value={info.email} name="email" onChange={onChange} />
        <button onClick={onClick}>인증하기</button>
      </div>
      <ConfirmEmail confirm={confirm}>
        <label>이메일 확인</label>
        <input value={info.confirm} name="confirm" onChange={onChange} />
        <button>인증 확인</button>
      </ConfirmEmail>
      <div>
        <label>비밀번호:</label>
        <input value={info.pwd} name="pwd" onChange={onChange} />
      </div>
    </Container>
  );
};

export default ForgotId;
