import React from "react";
import styled from "styled-components";
import { TreeSelect, Button } from "antd";
import { BUTTON_COLOR } from "../color";
const MentorInfo = {
  name: "Lee",
  comment: `I'm still hungry`,
  interest: ["#코딩", "#공부"],
};
const HashBox = styled.span``;
const Bold = styled.span`
  margin-left: 3%;
  & + & {
    margin-left: 45%;
  }
`;
const Mymentor = styled.div`
  display: flex;
  width: 50%;
  height: inherit;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  margin-top: 0.1rem;
  width: 100%;
  height: 30rem;
  border: 1px solid red;
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
  height: 160px;
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
      <MenteeBox>
        <div>
          <div>
            <span>{MentorInfo.name}</span>
            <span>{MentorInfo.interest[0]}</span>
            <span>{MentorInfo.interest[1]}</span>
          </div>
          <div>
            <span>{MentorInfo.comment}</span>
            <Button
              style={{
                height: 25,
                fontWeight: 900,
                background: BUTTON_COLOR,
                borderRadius: 8,
              }}
              type="primary"
            >
              추가 정보 보기
            </Button>
          </div>
        </div>
      </MenteeBox>
      <Container>
        <Mymentor>
          <MentorArea>멘토 영역</MentorArea>
        </Mymentor>
        <Mymentor>
          <TreeSelect
            placeholder="Please select"
            dropdownStyle={{ maxHeight: 300, overflow: "auto" }}
          />
        </Mymentor>
      </Container>
    </div>
  );
};

export default Mento;
