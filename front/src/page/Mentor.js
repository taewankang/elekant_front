import React from "react";
import styled from "styled-components";
import { TreeSelect, Button } from "antd";
import { BUTTON_COLOR } from "../color";
import ProfileBox from "../component/Mentor/ProfileBox";
const HashBox = styled.span``;
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
  border: 1px solid gray;
  border-radius: 16px;
`;
const MenteeBox = styled.div`
  width: 240px;
  height: 100px;
  border: 1px solid skyblue;
  border-radius: 7px;
  & + & {
    margin-left: 5px;
  }
`;
const Mento = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <Bold>
        <b>나의 멘토</b>
      </Bold>
      <Bold>
        <b>추천 멘토</b>
      </Bold>

      <Container>
        <Mymentor>
          <MentorArea>멘토 영역</MentorArea>
        </Mymentor>
        <Mymentor>
          <TreeSelect
            placeholder="Please select"
            dropdownStyle={{ maxHeight: 300, overflow: "auto" }}
          />
          <MenteeBox>
            <ProfileBox />
          </MenteeBox>
        </Mymentor>
      </Container>
    </div>
  );
};

export default Mento;
