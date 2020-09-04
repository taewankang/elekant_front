import React, { useState, useEffect, useRef } from 'react';
import {
  CommentContainer,
  CommentWriter,
  CommentContents,
  CommentList,
  CommentReply,
  CommentTextarea,
  CommentTime,
} from './style';
import { useDispatch } from 'react-redux';
import { EnterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { ADD_COMMENT_REQUEST } from 'reducer/board.js';
const Button = styled.button`
  width: 50px;
  background-color: green;
  color: #fff;
  font-weight: 900;
  margin: 0px 10px;
`;

const Comment = ({ comments }) => {
  const [replyInput, setReplyInput] = useState([]);
  const dispatch = useDispatch();
  const onClick = (e, id) => {
    e.preventDefault();
    return setReplyInput(prev => [
      ...prev.slice(0, id - 1),
      !replyInput[id - 1],
      ...prev.slice(id),
    ]);
  };

  useEffect(() => {
    comments.forEach(() => setReplyInput(prev => [...prev, false]));
  }, []);

  const addComment = id => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: id,
    });
  };

  return (
    <CommentContainer margin={10}>
      {comments.map(item => {
        return (
          <div key={item.id}>
            <CommentList>
              <CommentWriter>{item.writer}</CommentWriter>
              <CommentTime>{item.time}</CommentTime>
              <CommentContents>{item.contents}</CommentContents>
              <div>
                <CommentReply
                  value={item.id}
                  onClick={e => onClick(e, item.id)}
                >
                  답글 &nbsp; {item.comments.length}
                </CommentReply>
              </div>
              <hr />
            </CommentList>
            <div>
              {replyInput[item.id - 1] === true && (
                <div>
                  {item.comments.map(item2 => {
                    return (
                      <CommentContainer margin={30} key={item2.id}>
                        <CommentList>
                          <div style={{ diplay: 'flex' }}>
                            <EnterOutlined
                              style={{ transform: 'rotateY(180deg)' }}
                              rotate="0"
                            />
                            <CommentWriter>{item2.writer}</CommentWriter>
                            <CommentTime>{item2.time}</CommentTime>
                          </div>
                          <CommentContents>{item2.contents}</CommentContents>
                          <hr />
                        </CommentList>
                      </CommentContainer>
                    );
                  })}
                  <div>
                    <div style={{ display: 'flex' }}>
                      <CommentTextarea />
                      <Button onClick={e => addComment(e, item.id)}>
                        등록
                      </Button>
                    </div>
                    <hr />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </CommentContainer>
  );
};

export default Comment;
