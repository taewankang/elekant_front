import React from "react";
import {
  Title,
  InputContainer,
  SignUpContainer,
  SignUpContents,
} from "./style";
import { Form, Input, Button, Menu, Drowdown, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
  </Menu>
);

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
              <Form.Item name="school">
                <Input placeholder="학교 찾기" /> <Button>asdf</Button>
              </Form.Item>

              <Form.Item name="mail">
                <Input placeholder="mail" />
              </Form.Item>
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Hover me <DownOutlined />
                </a>
              </Dropdown>
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
