import React, { useState, useEffect } from 'react';
import {
  Title,
  InputContainer,
  SignUpContainer,
  SignUpContents,
  Button,
  Form,
} from './style';
import { Input, Select, Col } from 'antd';
import { useDispatch } from 'react-redux';
import {
  CHECK_ID_REQUEST,
  CHECK_NICKNAME_REQUEST,
  SIGN_UP_REQUEST,
} from 'reducer/user.js';
const { Option } = Select;
const { Search } = Input;

const SignUpContent = () => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    pwd: '',
    pwdCheck: '',
    email: '',
    nickname: '',
  });

  console.log(userInfo);
  const dispatch = useDispatch();
  const onChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === 'id') {
      dispatch({
        type: CHECK_ID_REQUEST,
        data: userInfo.id,
      });
    } else if (e.target.name === 'nickname') {
      dispatch({
        type: CHECK_NICKNAME_REQUEST,
        data: userInfo.nickname,
      });
    } else if (e.target.name === 'submit') {
      dispatch({
        type: SIGN_UP_REQUEST,
        data: userInfo,
      });
    }
  };

  return (
    <div>
      <SignUpContainer>
        <SignUpContents>
          <Title>회원가입</Title>
          <InputContainer>
            <Form onSubmit={onSubmit}>
              <div style={{ display: 'flex' }}>
                <Input
                  value={userInfo.id}
                  name="id"
                  onChange={onChange}
                  placeholder="아이디"
                />
                <Button name="id" onClick={onSubmit}>
                  확인
                </Button>
              </div>
            </Form>
            <Form onSubmit={onSubmit}>
              <div style={{ display: 'flex' }}>
                <Input
                  value={userInfo.nickname}
                  name="nickname"
                  onChange={onChange}
                  placeholder="nickname"
                />
                <Button name="nickname" onClick={onSubmit}>
                  확인
                </Button>
              </div>
            </Form>
            <Input.Password
              onChange={onChange}
              value={userInfo.pwd}
              style={{ margin: '5px 0px' }}
              name="pwd"
              placeholder="비밀번호"
            />
            <Input.Password
              onChange={onChange}
              name="pwdCheck"
              style={{ margin: '5px 0px' }}
              value={userInfo.pwdCheck}
              placeholder="비밀번호 확인"
            />
            <div
              style={{
                display: 'flex',
                marginTop: '5px',
                marginBottom: '10px',
              }}
            >
              <Input
                onChange={onChange}
                name="email"
                value={userInfo.email}
                placeholder="메일"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button name="submit" onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </InputContainer>
        </SignUpContents>
      </SignUpContainer>
    </div>
  );
};

export default SignUpContent;
