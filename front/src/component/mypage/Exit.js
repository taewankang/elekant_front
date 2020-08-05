// 마이 페이지 - 회원 탈퇴
import React from 'react';
import styled from 'styled-components';
import {Block, Title, CompleteButton} from './style';

const ExitContainer = styled.div`
    width: 700px;
    height: 400px;
`

const Exit = () => {
    return (
        <ExitContainer>
            <Title>회원탈퇴</Title>
            <Block>
                정말 탈퇴하시겠습니까?
            </Block>
        </ExitContainer>
    )
}

export default Exit