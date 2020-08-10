import styled from 'styled-components';
import {MY_PAGE_BACKGROUND, MY_PAGE_BORDER, BUTTON_COLOR} from '../../color';
const BOARD_WIDTH = 800;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-left: 10px;
`

export const Content = styled.div`
  margin-top: 20px;
  background-color: #FFFFFF;
  width: ${BOARD_WIDTH};
  height: 300px;
  border-radius: 10px;
  overflow-y: auto;
`

export const ContentTitle = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  font-weight: 900;
  align-items: center;
  font-size: 14px;
  border-bottom: 1px solid #000000;
`

export const Nickname = styled.span`
  display: inline-flex;
  justify-content: center;
  width: 15%;
`

export const Sentence = styled.span`
  display: inline-flex;
  justify-content: center;
  width: 50%;
`

export const Notification = styled.span`
  display: inline-flex;
  justify-content: center;
  width: 15%;
`

export const Conversation = styled.span`
  display: inline-flex;
  justify-content: center;
  width: 20%;
`

export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid #000000;
  align-items: center;
  color: #000000;
`

export const NicknameList = styled.span`
  display: inline-flex;
  justify-content: center;
  width: 15%; 
`

export const MessageButton = styled.button`
  background-color: #58E85D;
  border: 0;
  border-radius: 10px;
  color: #FFFFFF;
  font-weight: 900;
  outline: none;
`

export const ConversationButton = styled.button`
  background-color: #C62917;
  border: 0;
  border-raduis: 10px;
  color: #FFFFFF;
  outline: none;
  font-weight: 900;
  cursor: pointer;
`

export const RecommendContainer = styled.div`

`