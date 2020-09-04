import React from 'react';
import BoardDetailContent from 'component/board/BoardDetail';
const BoardDetail = ({ match }) => {
  return (
    <div>
      <BoardDetailContent match={match} />
    </div>
  );
};

export default BoardDetail;
