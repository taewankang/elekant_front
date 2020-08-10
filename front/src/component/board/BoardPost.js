import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {REQUEST_NEW_POST} from '../../reducer/board';
import {
  Container, Contents, Title,
  PostTitle, Input, ButtonContainer, Button,
} from './style';

const BoardPost = () => {
  const {nickname} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const onChange = (e) => {
    setContent(e.target.value);
  }
  
  const onClick = () => {
    dispatch({
      type: REQUEST_NEW_POST,
      data: content,
    })
  }

  return (
    <Container>
      <Contents>
        <Title>새로운 글 쓰기</Title>
        <PostTitle>
          <span style={{fontWeight: '700'}}>내용</span>
          <span style={{fontSize: '12px', alignSelf: 'center'}}>작성자: {nickname}</span>
        </PostTitle>
        <Input onChange={onChange}/>
        <ButtonContainer>
          <Link to='./1'>
            <Button onClick={onClick}>작성 완료</Button>
          </Link>
        </ButtonContainer>
      </Contents>
    </Container>
  )
}

export default BoardPost