import React from "react";
import styled, { css } from "styled-components";
import { TreeSelect, Button, Input } from "antd";
import { BUTTON_COLOR } from "../color";
import ProfileBox from "../component/Mentor/ProfileBox";
const { Search } = Input;
const Back = styled.div`
  width: 100%;
  height: 100%;
  background: #e2e1e6;
`;
const Bold = styled.span`
  margin-left: 3%;
  & + & {
    margin-left: 42%;
  }
`;
const Mymentor = styled.div`
  display: flex;
  width: 50%;
  height: inherit;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  margin-top: 0.1rem;
  width: 100%;
  height: 30rem;
`;
const MentorArea = styled.div`
  display: flex;
  width: 90%;
  height: 98%;
  border: 1px solid white;
  border-radius: 16px;
  background: #ffffff;
`;
const MenteeBox = styled.div`
  width: 240px;
  height: 100px;
  background: #ffffff;
  border: 2px solid white;
  border-radius: 7px;
  & + & {
    margin-left: 5px;
  }
`;
const Mento = () => {
  return (
    <Back>
      <Bold>
        <b>나의 멘토</b>
      </Bold>
      <Bold>
        <b>추천 멘토</b>
      </Bold>

      <Container>
        <Mymentor>
          <MentorArea></MentorArea>
        </Mymentor>
        <Mymentor style={{ display: "inline" }}>
          <div>
            <TreeSelect
              placeholder="Please select"
              dropdownStyle={{ maxHeight: 300, overflow: "auto" }}
            />

            <Search placeholder="search" style={{ width: 400 }} />
          </div>
          <div style={{ display: "flex" }}>
            <MenteeBox>
              <ProfileBox />
            </MenteeBox>
            <MenteeBox>
              <ProfileBox />
            </MenteeBox>
          </div>
        </Mymentor>
      </Container>
    </Back>
  );
};

export default Mento;
