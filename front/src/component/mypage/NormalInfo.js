// 마이 페이지 - 기본 정보
import React from 'react';
import styled from 'styled-components';
import {Container, Block, Bold, Title} from './style';
import {useSelector} from 'react-redux';

const NormalInfo = () => {
    const {id, name, nickname, school, mail} = useSelector(state => state.reducer);

    return (
        <Container>
            <Title>기본 정보</Title>
            <Block>
                <Bold>아이디</Bold> {id}
            </Block>
            <Block>
                <Bold>이름</Bold> {name}
            </Block>
            <Block>
                <Bold>닉네임</Bold> {nickname}
            </Block>
            <Block>
                <Bold>학교</Bold> {school}
            </Block>
            <Block>
                <Bold>학교 메일</Bold> {mail}
            </Block>
        </Container>
    )
}

export default NormalInfo