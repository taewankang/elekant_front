//마이 페이지 - 로그아웃
import React, {useCallback} from 'react';
import styled from 'styled-components';
import {Container, Title, Block, CompleteButton} from './style';
import {useSelector, useDispatch} from 'react-redux';
import {LOGOUT_REQUEST} from '../../reducer/user';
const ButtonContainer = styled.div`
    margin-top: 50px;
    display: flex;
    width: 100%;
    justify-content: center;
`

const Logout = ({history}) => {
    // const {isLogin, id, nickname, school, mail} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const logoutClick = useCallback(() => {
        //dispatch를 이용해서 reducer에 있는 사용자 관련 기록들 지워주는 작업이 필요
        dispatch({
            type: LOGOUT_REQUEST
        })
        history.push('/');
    })

    return (
        <Container>
            <Title>로그아웃</Title>
            <Block style={{height: '150px', display: 'block'}}>
                정말 로그아웃 하시겠습니까?
                <ButtonContainer>
                    <CompleteButton onClick={logoutClick}>로그아웃</CompleteButton>
                </ButtonContainer>
            </Block>
        </Container>
    )
}

export default Logout