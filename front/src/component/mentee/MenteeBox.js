import React from 'react';
import { MenteeBoxContainer, MenteeTitle, MenteeHashTag } from './style';
const MenteeBox = ({ username, sentence, subject }) => {
  return (
    <MenteeBoxContainer>
      <MenteeTitle>{username}</MenteeTitle>
      <div>{sentence}</div>
      <div>
        {subject.map((item, idx) => {
          return <MenteeHashTag key={idx}>{item}</MenteeHashTag>;
        })}
      </div>
    </MenteeBoxContainer>
  );
};

export default MenteeBox;
