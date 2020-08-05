import React from "react";
import {
  Title,
  InputContainer,
  SignUpContainer,
  SignUpContents,
} from "./style";
import { Form, Input, Button, Menu, Select, Col } from "antd";

const { Option } = Select;
const { Search } = Input;
const SignUpContent = () => {
  return (
    <div>
      <SignUpContainer>
        <SignUpContents>
          <Title>회원가입</Title>
          <InputContainer>
            <Form
              style={{ width: "80%" }}
              name="basic"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "아이디를 입력하세요!" }]}
              >
                <Input placeholder="아이디" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password placeholder="비밀번호" />
              </Form.Item>
              <Form.Item name="password_check">
                <Input.Password placeholder="비밀번호 확인" />
              </Form.Item>
              <Form.Item>
                <Search placeholder="학교 검색" style={{ width: 400 }} />
              </Form.Item>
              <Form.Item name="mail_last">
                <div style={{ display: "flex" }}>
                  <Col span={15}>
                    <div style={{ display: "flex" }}>
                      <Input placeholder="mail" />@
                    </div>
                  </Col>
                  <Select defaultValue="naver" style={{ width: 160 }}>
                    <Option value="naver">naver.com</Option>
                    <Option value="gmail">gmail.com</Option>
                    <Option value="직접입력">직접입력</Option>
                  </Select>
                </div>
              </Form.Item>
              <Form.Item name="cerification">
                <div style={{ display: "flex" }}>
                  <Col span={7}>
                    <Input placeholder="인증번호" />
                  </Col>
                  <Button>확인</Button>
                </div>
              </Form.Item>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Form.Item>
                  <Button
                    style={{ fontWeight: "900", backgroundColor: "#C62917" }}
                    type="primary"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </InputContainer>
        </SignUpContents>
      </SignUpContainer>
    </div>
  );
};

export default SignUpContent;
