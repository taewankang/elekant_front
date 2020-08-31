import React, {useState} from 'react';
import {
  CommentContainer, CommentWriter, CommentContents,
  CommentLike, CommentList, CommentReply,
  CommentTextarea, 
} from './style';
import { EnterOutlined } from '@ant-design/icons';

const Comment = ({margin, comments}) => {

  return (
    <CommentContainer margin={margin}>
      {
        comments.map(item => {
          return (
            <CommentList key={item.id}>
              <CommentWriter>
                {
                  margin !== 10 &&
                  <EnterOutlined style={{transform: 'rotateY(180deg)'}} rotate='0'/>
                }
                {item.writer}
              </CommentWriter>
              <CommentContents>{item.contents}</CommentContents>
              <div>
                <CommentReply>답글달기</CommentReply>
                <CommentLike>좋아요</CommentLike> {item.like}
              </div>
              <hr/>
              <Comment 
                margin={margin + 10} 
                comments={item.comments}/>
            </CommentList>
          )
        })
      }
    </CommentContainer>
  )
}

export default Comment;