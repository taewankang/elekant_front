import React from 'react';
import {
  BoardContainer, BoardContents, Title, DetailTitle,
  Input, CommentInput, ButtonContainer, Button} from './style';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const BoardDetail = ({match}) => {
  const {title, contents} = useSelector(state => state.board[match.params.id - 1]);
  const {nickname} = useSelector(state => state.user);

  return (
    <BoardContainer>
      <BoardContents>
        <DetailTitle>
          <span style={{fontWeight: '700'}}>{title}</span>
          <span style={{fontSize: '12px', alignSelf: 'center'}}>작성자: {nickname}</span>
        </DetailTitle>
        <Input defaultValue={contents} readOnly/>
        <hr/>
        <Title style={{fontSize:'16px', marginTop: '30px', marginBottom: '20px'}}>댓글</Title>
        <CommentInput/>
        <ButtonContainer>
          <Link to='/board'>
            <Button>목록</Button>
          </Link>
        </ButtonContainer>
      </BoardContents>
    </BoardContainer>
  )
}

export default BoardDetail