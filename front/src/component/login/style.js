import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
`

export const LoginContents = styled.div`
  width: 500px;
  height: 400px;
  margin-top: 100px;
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: bold;
  font-weight: 900;
  font-size: 25px;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  margin-top: 20px;
  height: 100%;
  
`

export const FindContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`

export const FindID = styled.span`
  cursor: pointer;
  color: black;
  &:hover {
    color: skyblue;
  }
`

export const FindPwd = styled.span`
  cursor: pointer;
  color: black;
  &:hover {
    color: skyblue;
  }
`
