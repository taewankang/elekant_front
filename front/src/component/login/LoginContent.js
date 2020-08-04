import React, {useEffect, useState, useCallback} from 'react';
import {LoginContainer, LoginContents, Title, InputContainer} from './style';
import { Form, Input, Button } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import 'antd/dist/antd.css';
import {BUTTON_COLOR} from '../../color';
import {LOGIN_REQUEST} from '../../reducer/reducer';
const LoginContent = ({history}) => {
  const dispatch = useDispatch();
  const {id, password, isLogin} = useSelector(state => state.reducer);
  
  const onFinish = useCallback(values => {    //values에 아이디, 비밀번호 값이 다 저장되어 있음
    console.log('Success:', values);
    dispatch({type: LOGIN_REQUEST})
    //로그인이 성공했을 때 넘어가도록 중간에 넣어줘야 됨
    history.push('/');
  });

  const onFinishFailed = useCallback(errorInfo => {
    console.log('Failed:', errorInfo);
  });

  return (
    <LoginContainer>
      <LoginContents>
        <Title>로그인</Title>
        <InputContainer>
          <Form
            style={{width: '80%'}}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '아이디를 입력하세요!' }]}>
            <Input placeholder='아이디'/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '비밀번호를 입력하세요' }]}>
            <Input.Password placeholder='비밀번호'/>
          </Form.Item>
          <div style={{display: 'flex', justifyContent:'center'}}>
            <Form.Item>
              <Button 
                style={{fontWeight: '900', backgroundColor: BUTTON_COLOR}}
                type="primary" 
                htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
        </InputContainer>
      </LoginContents>
    </LoginContainer>
  )
}

export default LoginContent