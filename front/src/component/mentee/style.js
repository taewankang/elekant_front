import styled from 'styled-components';
import {MY_PAGE_BACKGROUND, MY_PAGE_BORDER, BUTTON_COLOR} from '../../color';
import {Input, Button} from 'antd';
const BOARD_WIDTH = 800;
const { Search } = Input;

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
  border: 1px solid ${MY_PAGE_BORDER};
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
  border-bottom: 1px solid ${MY_PAGE_BORDER};
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

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  margin-top: 30px;
`

export const RecommendContainer = styled.div`
  width: 100%;
  background-color: ${MY_PAGE_BACKGROUND};
`

export const SearchInput = styled(Search)`
  width: 300px;
`

export const FilterButton = styled(Button)`
  width: 300px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  display: flex;
`