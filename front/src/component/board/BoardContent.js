//게시판 메인 화면
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { BOARD_DATA_REQUEST } from 'reducer/board';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import {
  Container,
  Contents,
  Title,
  BoardTitle,
  Id,
  Description,
  Watch,
  Date,
  Writer,
  Content,
  Comments,
  Block,
  PaginationContainer,
  Button,
  ButtonContainer,
  SpinContainer,
} from './style';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const BoardContent = ({ history }) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => state.user);
  const state = useSelector(state => state.board);
  const [page, setPage] = useState(1); //게시판 페이지
  useEffect(
    useCallback(() => {
      if (!isLogin) {
        //로그인 안 했을 때 들어오는 것 방지
        alert('로그인이 필요합니다.');
        history.push('/');
      }
      dispatch({ type: BOARD_DATA_REQUEST }); //서버에서 게시판 목록 불러오기
    }),
    [],
  );

  useEffect(
    useCallback(() => {
      isLogin &&
        history.push({
          pathname: '/board',
          search: `?page=${page}`,
        });
    }),
    [page],
  );

  if (isLogin === true) {
    return (
      <Container>
        <Contents>
          <Title>게시판</Title>
          <BoardTitle>
            <Id>번호</Id>
            <Description style={{ justifyContent: 'center' }}>내용</Description>
            <Watch>조회 수</Watch>
            <Date>날짜</Date>
            <Writer>작성자</Writer>
            <Comments>댓글 수</Comments>
          </BoardTitle>
          <Content>
            {state.length !== 0 ? (
              state.map(item => {
                return (
                  <Block key={item.id}>
                    <Id>{state.length - item.id + 1}</Id>
                    <Description>
                      <Link
                        style={{ color: '#000000' }}
                        to={`/board/detail/${item.id}`}
                      >
                        {item.title}
                      </Link>
                    </Description>
                    <Watch>{item.watch}</Watch>
                    <Date>{item.time}</Date>
                    <Writer>{item.writer}</Writer>
                    <Comments>{item.comments.length}</Comments>
                  </Block>
                );
              })
            ) : (
              <SpinContainer>
                <Spin indicator={antIcon} />
              </SpinContainer>
            )}
          </Content>
          <ButtonContainer>
            <Link to="/board/post">
              <Button>글 쓰기</Button>
            </Link>
          </ButtonContainer>
          <PaginationContainer>
            <Pagination
              pageSize={1} //한 페이지에 몇개가 보일 것인가?
              onChange={page => setPage(page)}
              defaultCurrent={1}
              total={state.length}
            />
          </PaginationContainer>
        </Contents>
      </Container>
    );
  } else {
    return <div></div>;
  }
};

export default BoardContent;
