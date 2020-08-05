//마이 페이지 - 개인 정보 변경
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Block, Bold, Title, Input, CompleteButton, ButtonContainer} from './style';
import {useSelector} from 'react-redux';
import {PlusCircleOutlined} from '@ant-design/icons'
import {BUTTON_COLOR} from '../../color';
import 'antd/dist/antd.css';

const PersonContainer = styled.div`
    width: 700px;
    height: 400px;
`

const NameException = styled.span`
    color: ${BUTTON_COLOR};
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const PersonalInfo = () => {
    const {name, nickname, school} = useSelector(state => state.reducer);
    const [username, setName] = useState('');                       //이름
    const [userNick, setNickname] = useState('');                   //닉네임
    const [checkName, setCheckName] = useState(false);
    const [checkNick, setCheckNick] = useState(false);

    const nameChange = (e) => {setName(e.target.value)}
    const nicknameChange = (e) => {setNickname(e.target.value)}

    const onSubmit = (e) => {
        e.preventDefault();
        if(username === '') setCheckName(true);
        else setCheckName(false);
        if(userNick === '') setCheckNick(true);
        else setCheckNick(false);

        //예외상황 다 처리했다면 post
    }

    const addSchool = () => {

    }

    useEffect(() => {
        setName(name);
        setNickname(nickname);
    }, [])

    return (
        <PersonContainer>
            <Title>개인정보 변경</Title>
            <form onSubmit={onSubmit}>
                <Block>
                    <Bold>이름 변경</Bold>
                    <Input value={username} onChange={nameChange}/>
                    { checkName && <NameException>※ 이름을 입력하세요</NameException> }
                </Block>
                <Block>
                    <Bold>닉네임 변경</Bold>
                    <Input value={userNick} onChange={nicknameChange}/>
                    { checkNick && <NameException>※ 닉네임을 입력하세요</NameException> }
                </Block>
                <Block>
                    <Bold>학교 추가</Bold>
                    <div style={{width: '200px'}}>
                        {school}
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <PlusCircleOutlined onClick={addSchool}/>
                    </div>
                </Block>
                <ButtonContainer>
                    <CompleteButton>수정 완료</CompleteButton>
                </ButtonContainer>
            </form>
        </PersonContainer>
    )
}

export default PersonalInfo