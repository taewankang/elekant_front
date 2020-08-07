import React from 'react';
import {BoardContainer, BoardContents} from './style';
import {useSelector} from 'react-redux';
const BoardDetail = ({params}) => {
  const {title, contents} = useSelector(state => state.board);
  
  return (
    <BoardContainer>
      <BoardContents>
        
      </BoardContents>
    </BoardContainer>
  )
}

export default BoardDetail