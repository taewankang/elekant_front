import React, { useState } from 'react';
import {
  CommentContainer,
  CommentWriter,
  CommentContents,
  CommentList,
  CommentReply,
  CommentTextarea,
} from './style';
import { EnterOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Button = styled.button`
  width: 50px;
  background-color: green;
  color: #fff;
  font-weight: 900;
  margin: 0px 10px;
`;

const Comment = ({ comments }) => {
  const [replyInput, setReplyInput] = useState(0);

  const onClick = e => {
    console.log(e.target.value);
    console.log(e);
    setReplyInput(Number(e.target.value));
  };

  return (
    <CommentContainer margin={10}>
      {comments.map(item => {
        return (
          <div key={item.id}>
            <CommentList>
              <CommentWriter>{item.writer}</CommentWriter>
              <CommentContents>{item.contents}</CommentContents>
              <div>
                <CommentReply value={item.id} onClick={onClick}>
                  답글달기
                </CommentReply>
              </div>
              {item.id === replyInput && (
                <div style={{ display: 'flex' }}>
                  <CommentTextarea />
                  <Button>등록</Button>
                </div>
              )}
              <hr />
            </CommentList>
            {item.comments.length > 0 &&
              item.comments.map(item2 => {
                return (
                  <CommentContainer margin={20} key={item2.id}>
                    <CommentList>
                      <div style={{ diplay: 'flex' }}>
                        <EnterOutlined
                          style={{ transform: 'rotateY(180deg)' }}
                          rotate="0"
                        />
                        <CommentWriter>{item2.writer}</CommentWriter>
                      </div>
                      <CommentContents>{item.contents}</CommentContents>
                      <hr />
                    </CommentList>
                  </CommentContainer>
                );
              })}
          </div>
        );
      })}
    </CommentContainer>
  );
};

export default Comment;
