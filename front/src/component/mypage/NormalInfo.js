// 마이 페이지 - 기본 정보
import React from 'react';
import styled from 'styled-components';
import {Container, Block, Bold, Title} from './style';
import {useSelector} from 'react-redux';

const NormalInfo = () => {
    const {id, name, nickname, school, mail} = useSelector(state => state.user);
    const titleList = ['아이디', '이름', '닉네임', '학교', '학교 메일'];
    const infoList = [id, name, nickname, school, mail];
    return (
        <Container>
            <Title>기본 정보</Title>
            {
                infoList.map((item, idx) => {
                    return (
                        <Block key={idx}>
                            <Bold>{titleList[idx]}</Bold> {item}
                        </Block>
                    )
                })
            }
        </Container>
    )
}

export default NormalInfo