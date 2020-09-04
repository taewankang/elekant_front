import styled from 'styled-components';
import { MY_PAGE_BACKGROUND, MY_PAGE_BORDER, BUTTON_COLOR } from 'color.js';
const BOARD_WIDTH = 800;
export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  background-color: ${MY_PAGE_BACKGROUND};
  height: 100vh;
  @media only screen and (min-width: ${BOARD_WIDTH + 1}px) {
    display: flex;
    justify-content: center;
  }
`;

export const Contents = styled.div`
  width: ${BOARD_WIDTH}px;
  min-width: ${BOARD_WIDTH}px;
  margin-top: 50px;
  height: 100%;
  color: #000000;
  @media only screen and (max-width: ${BOARD_WIDTH + 20}px) {
    padding: 0px 10px;
    width: ${BOARD_WIDTH + 20}px;
  }
`;

export const Title = styled.div`
  margin-top: 100px;
  font-size: 20px;
  font-weight: 900;
  margin-left: 30px;
`;

export const BoardTitle = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 30px;
  font-weight: 900;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  display: flex;
  align-items: center;
`;

export const Id = styled.span`
  display: inline-flex;
  width: 5%;
  justify-content: center;
`;

export const Description = styled.span`
  display: inline-flex;
  width: 30%;
  justify-content: flex-start;
  padding-left: 20px;
`;

export const Watch = styled.span`
  display: inline-flex;
  width: 10%;
  justify-content: center;
`;

export const Date = styled.span`
  display: inline-flex;
  width: 40%;
  justify-content: center;
`;
export const Writer = styled.span`
  display: inline-flex;
  width: 10%;
  justify-content: center;
`;
export const Content = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid ${MY_PAGE_BORDER};
`;

export const Comments = styled.span`
  display: inline-flex;
  width: 5%;
  justify-content: center;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${MY_PAGE_BORDER};
  height: 40px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  background-color: ${BUTTON_COLOR};
  border: 1px solid ${MY_PAGE_BORDER};
  color: #ffffff;
  outline: none;
  width: 80px;
  height: 30px;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    background-color: #cc3d3d;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PostTitle = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: space-between;
  padding: 0px 50px;
  font-size: 16px;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
`;

export const Input = styled.textarea`
  margin-top: 10px;
  resize: none;
  width: ${BOARD_WIDTH}px;
  height: 300px;
  backgrouond-color: #ffffff;
  border: 1px solid ${MY_PAGE_BORDER};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  outline: none;
`;

export const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CommentInput = styled.textarea`
  width: ${BOARD_WIDTH}px;
  height: 150px;
  border: 1px solid ${MY_PAGE_BORDER};
  padding: 10px;
  outline: none;
  background-color: #ffffff;
  margin-bottom: 30px;
`;

export const DetailTitle = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  justify-content: space-between;
  padding: 0px 50px;
  font-size: 20px;
  border-bottom: 1px solid #000000;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 30px;
  margin: 15px 0px;
  border: 0px;
  border-bottom: 1px solid #000;
  outline: none;
  background: ${MY_PAGE_BACKGROUND};
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const TitleSpan = styled.span`
  width: 50px;
  display: flex;
  align-items: center;
  font-weight: 900;
`;

export const CommentContainer = styled.div`
  text-indent: ${props => props.margin}px;
`;

export const CommentList = styled.div`
  width: 100%;
`;

export const CommentWriter = styled.span`
  font-weight: 900;
  font-size: 15px;
`;

export const CommentContents = styled.div`
  height: 100%;
`;

export const CommentLike = styled.span`
  cursor: pointer;
  &:hover {
    color: skyblue;
  }
`;

export const CommentReply = styled.button`
  margin-right: 20px;
  cursor: pointer;
  background-color: ${MY_PAGE_BACKGROUND};
  border: none;
  outline: none;
`;

export const CommentTextarea = styled.textarea`
  width: 100%;
  resize: none;
  height: 50px;
  overflow-y: auto;
`;

export const CommentBlock = styled.div`
  margin-bottom: 100px;
`;

export const CommentTime = styled.div`
  color: #999;
`;
