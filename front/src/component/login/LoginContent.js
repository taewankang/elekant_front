import React, {useEffect, useState, useCallback} from 'react';
import {LoginContainer, LoginContents, Title, InputContainer} from './style';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const LoginContent = () => {
  const onFinish = useCallback(values => {    //values에 아이디, 비밀번호 값이 다 저장되어 있음
    console.log('Success:', values);
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
                style={{fontWeight: '900'}}
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