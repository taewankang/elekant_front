// 마이 페이지 - 회원 탈퇴
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Block, Title, CompleteButton} from './style';
import {useSelector, useDispatch} from 'react-redux';
import { useCallback } from 'react';
const ExitContainer = styled.div`
    width: 700px;
    height: 400px;
`
const ButtonContainer = styled.div`
    margin-top: 50px;
    display: flex;
    width: 100%;
    justify-content: center;
`

const Exit = () => {
    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        // dispatch({
        //     type: 
        // })
    })
    return (
        <ExitContainer>
            <Title>회원탈퇴</Title>
            <Block style={{height: '150px', display: 'block'}}>
                정말 탈퇴하시겠습니까?
                <ButtonContainer>
                    <CompleteButton onClick={onClick}>회원탈퇴</CompleteButton>
                </ButtonContainer>
            </Block>
        </ExitContainer>
    )
}

export default Exit