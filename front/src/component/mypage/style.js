import {MY_PAGE_BORDER, BUTTON_COLOR} from '../../color';
import styled from 'styled-components';
export const Block = styled.div`
    width: 700px;
    height: 70px;
    padding: 20px;
    display: flex;
    background-color: #FFFFFF;
    color: #000000;
    border: 1px solid ${MY_PAGE_BORDER};
`

export const Bold = styled.div`
    width: 80px;
    font-weight: 800;
`

export const Title = styled.div`
    font-weight: 900;
    font-size: 20px;
    width: 700px;
    height: 70px;
    padding: 20px;
    display: flex;
    background-color: #FFFFFF;
    color: #000000;
    border: 1px solid ${MY_PAGE_BORDER};
`

export const Input = styled.input`
    border: none;
    outline: none;
    border-bottom: 1px solid #CCC;
    color: #555;
    width: 200px;
    &:focus{border-bottom: 1px solid #000000;}
`

export const CompleteButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: ${BUTTON_COLOR};
    color: #FFFFFF;
    font-weght: 800;
    box-shadow: none;
    border: 1px solid ${BUTTON_COLOR};
`