import React from 'react';
import styled from 'styled-components';
import {Block, Bold, Title} from './style';
const PersonContainer = styled.div`
    width: 700px;
    height: 
    background-color: #000000;
    color: #000000;
`



const PersonalInfo = () => {
    return (
        <PersonContainer>
            <Title>개인정보 변경</Title>
            <Block></Block>
        </PersonContainer>
    )
}

export default PersonalInfo