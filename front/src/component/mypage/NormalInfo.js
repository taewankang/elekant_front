import React from 'react';
import styled from 'styled-components';
import {Block, Bold, Title} from './style';
import {useSelector} from 'react-redux';
const NormalContainer = styled.div`
    width: 1000px;
    height: 500px;
    font-color: #000000;
`

const NormalInfo = () => {
    const {id, name, nickname, school, mail} = useSelector(state => state.reducer);

    return (
        <NormalContainer>
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
        </NormalContainer>
    )
}

export default NormalInfo