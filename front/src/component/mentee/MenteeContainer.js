import React from 'react';
import { Container, Contents } from 'component/board/style';
import MyMentor from './MyMentor';
import { useSelector } from 'react-redux';
import RecommendMentee from './RecommendMentee';
const MenteeContainer = () => {
  const { state } = useSelector(state => state.user);

  return (
    <Container>
      <Contents>
        {state === 'mentor' && <MyMentor />}
        <RecommendMentee />
      </Contents>
    </Container>
  );
};

export default MenteeContainer;
