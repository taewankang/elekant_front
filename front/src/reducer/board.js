const initialState = [
  {
    id: 1,    //게시물 번호
    title: '제목 1',  //게시물 제목
    contents: '나 지금 뭐해야 하나요', //게시물 내용
    watch: 0,     //조회 수
    writer: '태완',
    time: '2020-08-06 14:00:00',
    comments: [   //댓글
      {
        contents: [   
          {id: 1},    //댓글 번호
          {username: 'han'},  //댓글 단 사람 이름
          {contents: '제 생각은요'},  //댓글 내용
          {time: '2020-08-07 16:00:00'},  //댓글 쓴 시간
          {like: 0}    //좋아요
        ]
      },
      {
        contents: [
          {id: 2},
          {username: 'son'},
          {contents: '제 생각도요'},
          {time: '2020-08-07 14:00:00'},
          {like: 0}
        ]
      }
    ],
  },
  {
    id: 2,
    title: '제목 2',
    contents: '나 지금 뭐해야 하나요',
    watch: 0,
    writer: '상하',
    time: '2020-08-06 14:00:00',
    comments: [
      {
        contents: [
          {id: 1},
          {username: 'han'},
          {contents: '제 생각은요'},
          {time: '2020-08-07 16:00:00'},
          {like: 0}
        ]
      },
      {
        contents: [
          {id: 2},
          {username: 'son'},
          {contents: '제 생각도요'},
          {time: '2020-08-07 14:00:00'},
          {like: 0}
        ]
      }
    ],
  }
]

export const REQUEST_BOARD_DATA = 'REQUEST_BOARD_DATA';
export const BOARD_DATA_SUCCESS = 'BOARD_DATA_SUCCESS';
export const BOARD_DATA_FAILURE = 'BOARD_DATA_FAILURE';
// 번호, 제목, 조회 수, 날짜, 작성자, 댓글 수를 페이지별로 불러온다.
// 페이지 번호를 누를 때마다 데이터를 받아온다.
// 한 번에 모든 페이지 정보를 받아오는 것은 비효율적이라고 생각했기 때문에 페이지를
// 누를 때마다 해당 페이지에 해당하는 정보들을 받아오려고 했다.

export const REQUEST_COMMENT_POST = 'REQUEST_BOARD_POST';
export const COMMENT_POST_SUCCESS = 'BOARD_POST_SUCCESS';
export const COMMENT_POST_FAILURE = 'BOARD_POST_FAILURE'; 
//제목을 눌렀을 때 뜨는 페이지
//제목, 내용, 작성자, 작성 시간, 댓글 내용 등이 나옴
//댓글 내용(댓글의 번호, 댓글을 입력한 사람의 nickname, 댓글을 입력한 시간, 좋아요 수)


export const REQUEST_NEW_POST = 'REQUEST_NEW_POST';
export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const NEW_POST_FAILURE = 'NEW_POST_FAILURE';
// 새로운 글을 쓸 때 요청하는 작업
// input에 입력한 값을 서버로 nickname, 등록 시간과 함께 전송해준다.


export const REQUEST_ADD_COMMENT = 'REQUEST_ADD_COMMENT';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
//댓글에 답글을 달 때
//좀 더 생각해보기

export const board = (state = initialState, action) => {
  switch(action.type){
    case REQUEST_BOARD_DATA:
    case BOARD_DATA_SUCCESS:
    case BOARD_DATA_FAILURE:

    case REQUEST_COMMENT_POST:
    case COMMENT_POST_SUCCESS:
    case COMMENT_POST_FAILURE:

    case REQUEST_NEW_POST:
      return state;
    case NEW_POST_SUCCESS:
    case NEW_POST_FAILURE:

    case REQUEST_ADD_COMMENT:
    case ADD_COMMENT_SUCCESS:
    case ADD_COMMENT_FAILURE:
    default:
      return state;
  }
}