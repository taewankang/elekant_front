import React, { useState, useEffect } from "react";
import {
  Title,
  InputContainer,
  SignUpContainer,
  SignUpContents,
} from "./style";
import { Form, Input, Button, Select, Col } from "antd";

const { Option } = Select;
const { Search } = Input;

const SignUpContent = () => {
  const [id, setId] = useState("");
  const [password, setPw] = useState("");
  const [pw_check, setCheck] = useState("");
  const [mail, setMail] = useState("");
  const [status, setStatus] = useState("error");

  useEffect(() => {
    if (password === pw_check) setStatus("success");
    else {
      setStatus("error");
    }
  }, [pw_check]);

  const onChange = (e) => {
    if (e.target.id === "basic_username") {
      setId(e.target.value);
    } else if (e.target.id === "basic_password") {
      setPw(e.target.value);
    } else if (e.target.id === "basic_password_check") {
      setCheck(e.target.value);
    } else if (e.target.id === "basic_mail") {
      setMail(e.target.value);
    }
  };
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
                className="username"
                name="username"
                rules={[{ required: true, message: "아이디를 입력하세요!" }]}
                value={id}
                onChange={onChange}
              >
                <div style={{ display: "flex" }}>
                  <Input placeholder="아이디" />
                  <Button>중복 확인</Button>
                </div>
              </Form.Item>
              <Form.Item
                name="password"
                value={password}
                onChange={onChange}
                rules={[{ required: true, message: "비밀번호를 입력하세요!" }]}
              >
                <Input.Password placeholder="비밀번호" />
              </Form.Item>
              <Form.Item
                name="password_check"
                value={pw_check}
                onChange={onChange}
                hasFeedback
                validateStatus={status}
                rules={[
                  { required: true, message: "비밀번호를 다시 입력해주세요" },
                ]}
              >
                <Input.Password placeholder="비밀번호 확인" />
              </Form.Item>
              <Form.Item>
                <Search placeholder="학교 검색" style={{ width: 400 }} />
              </Form.Item>
              <Form.Item name="mail" value={mail}>
                <div style={{ display: "flex" }}>
                  <Input placeholder="mail" />
                  <Button>메일인증</Button>
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
              <Form.Item name="cerification">
                <Select defaultValue="lucy" style={{ width: 120 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
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
