//마이 페이지 - 비밀번호 변경
import React, {useState, useEffect, useCallback} from 'react';
import {Container, Block, Bold, Input, Title, CompleteButton, ButtonContainer} from './style';
import styled from 'styled-components';
import {BUTTON_COLOR} from '../../color';

const PasswordException = styled.span`
    color: ${BUTTON_COLOR};
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const ChangePassword = () => {
    const [inputPwd, setInputPwd] = useState('');               //기존 비밀번호
    const [userPwd, setPwd] = useState('');                     //비밀번호
    const [checkPwd, setCheckPwd] = useState('');               //비밀번호 확인
    const [checkInput, setCheckInput] = useState(false);        //기존의 비밀번호랑 맞는지 확인
    const [confirmPwd, setConfirmPwd] = useState(true);        //새 비밀번호와 비밀번호 확인이 일치하는지 확인
    
    const currentChange = useCallback((e) => { setInputPwd(e.target.value) })
    const newChange = useCallback((e) => { setPwd(e.target.value) })
    const confirmChange = useCallback((e) => { setCheckPwd(e.target.value) })

    useEffect(() => { 
        userPwd === checkPwd ? setConfirmPwd(false) : setConfirmPwd(true);
    }, [userPwd, checkPwd])

    const onSubmit = (e) => {
        // 기존의 비밀번호가 맞는지 확인(post로 확인)
        // 새로 입력한 비밀번호가 비밀번호 확인이랑 맞는지 확인
        e.preventDefault();
        if(!confirmPwd) {        //비밀번호 변경 해주기

            alert('정상적으로 변경되었습니다.');
        } else alert('비밀번호가 일치하지 않습니다.');
    }

    return (
        <Container>
            <Title>비밀번호 변경</Title>
            <form onSubmit={onSubmit}>
                <Block>
                    <Bold>현재 비밀번호</Bold>
                    <Input onChange={currentChange} type='password'/>
                </Block>
                <Block>
                    <Bold>새로운 비밀번호</Bold>
                    <Input onChange={newChange} type='password'/>
                </Block>
                <Block>
                    <Bold>비밀번호 확인</Bold>
                    <Input onChange={confirmChange} type='password'/>
                    { confirmPwd && <PasswordException>비밀번호가 다릅니다.</PasswordException> }
                </Block>
                <ButtonContainer>
                    <CompleteButton>비밀번호 변경</CompleteButton>
                </ButtonContainer>
            </form>
        </Container>
    )
}

export default ChangePassword