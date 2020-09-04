import React from 'react';
import BoardContent from 'component/board/BoardContent';
const BoardMain = ({ history, match, location }) => {
  return (
    <div>
      <BoardContent history={history} />
    </div>
  );
};

export default BoardMain;
