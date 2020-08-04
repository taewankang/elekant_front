import React from 'react';
import styled from 'styled-components';
import {MY_PAGE_BORDER} from '../../color';
import {useSelector} from 'react-redux';
const NormalContainer = styled.div`
    width: 1000px;
    height: 500px;
    font-color: #000000;
`

const Block = styled.div`
    width: 700px;
    height: 70px;
    padding: 20px;
    display: flex;
    background-color: #FFFFFF;
    border: 1px solid ${MY_PAGE_BORDER};
`

const Bold = styled.div`
    width: 80px;
    font-weight: 800;
`

const NormalInfo = () => {
    const {id, name, nickname, school, mail} = useSelector(state => state.reducer);

    return (
        <NormalContainer>
            <Block>
                <Bold style={{fontWeight: '900', fontSize: '20px'}}>기본 정보</Bold>
            </Block>
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