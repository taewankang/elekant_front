import React from 'react';
import BoardContent from '../component/board/BoardContent';
const Board = ({history, match, location}) => {
    return (
        <div>
          <BoardContent history={history}/>
        </div>
    )
}

export default Board;