import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import {
  BoardContainer, BoardContents, Title, 
  BoardTitle, Id, Description, Watch,
  Date, Writer, Content, Comments,
  Block, PaginationContainer
} from './style';

const BoardContent = ({history}) => {
  const {isLogin} = useSelector(state => state.user);
  const state = useSelector(state => state.board);
  useEffect(() => { //로그인 안 했을 때 들어오는 것 방지
    if(!isLogin) {
      alert('로그인이 필요합니다.');
      history.push('/');
    }
  }, [])

  if(isLogin === true){
    return (
      <BoardContainer>
        <BoardContents>
          <Title>게시판</Title>
          <BoardTitle>
            <Id>번호</Id>
            <Description style={{justifyContent: 'center'}}>내용</Description>
            <Watch>조회 수</Watch>
            <Date>날짜</Date>
            <Writer>작성자</Writer>
            <Comments>댓글 수</Comments>
          </BoardTitle>
          <Content>
            {
              state.length !== 0 && 
              state.map(item => {
                return (
                  <Block key={item.id}>
                    <Id>{state.length - item.id + 1}</Id>
                    <Description>
                      {/* <Link to={}> */}
                        {item.title}
                      {/* </Link> */}
                    </Description>
                    <Watch>{item.watch}</Watch>
                    <Date>{item.time}</Date>
                    <Writer>{item.writer}</Writer>
                    <Comments>{item.comments.length}</Comments>
                  </Block>
                )
              })
            }
          </Content>
          <PaginationContainer>
            <Pagination defaultCurrent={1} total={state.length} />
          </PaginationContainer>
        </BoardContents>
      </BoardContainer>
    )
  } else {return <div></div>}
}

export default BoardContent