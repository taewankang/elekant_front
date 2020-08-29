//새로운 글 작성
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {NEW_POST_REQUEST} from '../../reducer/board';
import {now} from '../../constant';
import {
  Container, Contents, Title,
  PostTitle, Input, ButtonContainer, 
  Button, TitleInput, TitleContainer,
  TitleSpan,
} from './style';

const BoardPost = () => {
  const {nickname} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {

  }, []);

  const onChange = (e) => {
    const name = e.target.name;
    console.log('name', name)
    if(name === 'title') setTitle(e.target.value);
    else setContent(e.target.value);
  }
  
  const onClick = () => {
    dispatch({
      type: NEW_POST_REQUEST,
      data: {
        title: title,
        content: content,
        id: nickname,
        time: now(),
      },
    })
  }

  return (
    <Container>
      <Contents>
        <Title>글 쓰기</Title>
        <PostTitle>
          <span style={{fontWeight: '700'}}>내용</span>
          <span style={{fontSize: '12px', alignSelf: 'center'}}>작성자: {nickname}</span>
        </PostTitle>
        <TitleContainer>
          <TitleSpan>
            제목: 
          </TitleSpan>
          <TitleInput 
            name='title' 
            value={title} 
            onChange={onChange}/>
        </TitleContainer>
        <Input               
          name='content'
          value={content} 
          onChange={onChange}/>
        <ButtonContainer>
          <Link to='./1'>
            <Button 
              onClick={onClick}>
              작성 완료
            </Button>
          </Link>
        </ButtonContainer>
      </Contents>
    </Container>
  )
}

export default BoardPost