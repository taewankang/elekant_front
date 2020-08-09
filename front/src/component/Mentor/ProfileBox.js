import React from "react";
import { Button } from "antd";
import { BUTTON_COLOR } from "../../color";
const MentorInfo = {
  name: "Lee",
  comment: `I'm still hungry`,
  interest: ["#코딩", "#공부"],
};
function ProfileBox() {
  return (
    <div>
      <div>
        <span>{MentorInfo.name}</span>
        <span style={{ marginLeft: 100 }}>{MentorInfo.interest[0]}</span>
        <span style={{ marginLeft: 20 }}>{MentorInfo.interest[1]}</span>
      </div>
      <div>
        <br />
        <span>{MentorInfo.comment}</span>
        <Button
          style={{
            height: 25,
            fontWeight: 900,
            background: BUTTON_COLOR,
            borderRadius: 8,
            marginLeft: 20,
          }}
          type="primary"
        >
          추가 정보 보기
        </Button>
      </div>
    </div>
  );
}

export default ProfileBox;
