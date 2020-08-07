import React from 'react';
import BoardDetailContent from '../component/board/BoardDetail';
const BoardDetail = ({match}) => {
  console.log(match)
  return (
    <div>
      <BoardDetailContent match={match}/>          
    </div>
  )
}

export default BoardDetail