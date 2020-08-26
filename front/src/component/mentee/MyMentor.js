import React from 'react';
import {useSelector} from 'react-redux';
import {
  Title, Content, ContentTitle, 
  Nickname, Sentence, Notification,
  Conversation, ListContainer, MessageButton,
  ConversationButton
} from './style';

const MentorList = () => {
  const {mentor} = useSelector(state => state.user);
  console.log(mentor)
  return (
    <div>
      {   
        mentor.map(item => {
          console.log(item)
          return (
            <ListContainer key={item.id}>
              <Nickname>{item.nickname}</Nickname>
              <Sentence>{item.sentence}</Sentence>
              <Notification>
                { item.newMessage && <MessageButton>new</MessageButton> }
              </Notification>
              <Conversation>
                <ConversationButton>바로 가기</ConversationButton>
              </Conversation>
            </ListContainer>
          )
        }
        )   
      }
    </div>
  )
}

const MyMentor = () => {
  const {state} = useSelector(state => state.user);

  return (
    <div>
      <Title>나의 멘티</Title>
      <Content>
        <ContentTitle>
          <Nickname>닉네임</Nickname>
          <Sentence>멘토의 한마디</Sentence>
          <Notification>새로운 알림</Notification>
          <Conversation>멘토와의 대화</Conversation>
        </ContentTitle>
        <MentorList />
      </Content>
    </div>
  )
}

export default MyMentor