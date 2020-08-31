//게시글 세부정보 확인
import React, {useState, useEffect, useCallback} from 'react';
import {
  Container, Contents, Title,
  DetailTitle, Input, CommentInput, 
  ButtonContainer, Button, CommentBlock,
} from './style';

import {useSelector, useDispatch} from 'react-redux';
import {COMMENT_POST_REQUEST} from '../../reducer/board';
import {Link} from 'react-router-dom';
import Comment from './Comment';

const BoardDetail = ({match}) => {
  const [inputText, setInputText] = useState('');
  const {title, contents, comments, writer} = useSelector(state => state.board[match.params.id - 1]);
  const {nickname} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const inputChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  }

  const registerClick = (e) => {
    e.preventDefault();
    dispatch({
      type: COMMENT_POST_REQUEST,
      data: {
        id: match.params.id,
        nickname: nickname,
        content: inputText,
      },
    })
    console.log(comments);
  };

  useEffect(() => {
    setInputText('');
  }, [comments]);

  return (
    <Container>
      <Contents>
        <DetailTitle>
          <span style={{fontWeight: '700'}}>{title}</span>
          <span style={{fontSize: '12px', alignSelf: 'center'}}>작성자: {writer}</span>
        </DetailTitle>
        <Input defaultValue={contents} readOnly/>
        <hr/>
        <Title 
          style={{
            fontSize:'16px', 
            marginTop:'10px', 
            lineHeight:'2rem'}}>
          댓글
        </Title>
        <CommentInput onChange={inputChange} value={inputText} />
        <ButtonContainer>
          <Button 
            style={{backgroundColor: 'green'}} 
            onClick={registerClick}>
            등록
          </Button>
          <Link to='/board'>
            <Button>취소</Button>
          </Link>
        </ButtonContainer>
        <CommentBlock>
          <Comment margin={10} comments={comments}/>
        </CommentBlock>
      </Contents>
    </Container>
  )
}

export default BoardDetail