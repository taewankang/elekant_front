import React from 'react';
import {} from './style';
import {Container, Contents} from '../board/style';
import {} from './style';
import MyMentor from './MyMentor';
import {useSelector} from 'react-redux';
import RecommendMentee from './RecommendMentee';
const MenteeContainer = () => {
  const {state} = useSelector(state => state.user);

  return (
    <Container>
      <Contents>
        { state === 'mentor' && <MyMentor/> }
        <RecommendMentee/>
      </Contents>
    </Container>
  )
}

export default MenteeContainer