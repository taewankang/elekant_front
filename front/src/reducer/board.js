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
        id: 1,    //댓글 번호
        writer: 'han',  //댓글 단 사람 이름
        contents: '제 생각은요',  //댓글 내용
        time: '2020-08-07 16:00:00',  //댓글 쓴 시간
        like: 0,    //좋아요
        comments: []
      },
      {
        id: 2,
        writer: 'son',
        contents: '제 생각도요',
        time: '2020-08-07 14:00:00',
        like: 0,
        comments: [],
      }
    ],
  },
  {
    id: 2,
    contents: '깊이1',
    watch: 0,
    writer: '상하',
    title: '제목2',
    time: '2020-08-06 14:00:00',
    comments: [
      {
        id: 1,
        writer: 'han',
        contents: '깊이2',
        time: '2020-08-07 16:00:00',
        like: 0,
        comments: [
          {
            id: 1,
            writer: 'kang',
            contents: '깊이3',
            time: '2020-08-07 16:00:00',
            like: 10,
            comments: [
              {
                id: 1,
                writer: 'kang',
                contents: '깊이4',
                time: '2020-08-07 16:00:00',
                like: 10,
                comments: []
              }
            ]
          }
        ]
      },
      {
        id: 2,
        writer: 'son',
        contents: '제 생각도요',
        time: '2020-08-07 14:00:00',
        like: 0,
        comments: [

        ]
      }
    ],
  }
]

export const BOARD_DATA_REQUEST = 'BOARD_DATA_REQUEST';
export const BOARD_DATA_SUCCESS = 'BOARD_DATA_SUCCESS';
export const BOARD_DATA_FAILURE = 'BOARD_DATA_FAILURE';
// 번호, 제목, 조회 수, 날짜, 작성자, 댓글 수를 페이지별로 불러온다.
// 페이지 번호를 누를 때마다 데이터를 받아온다.
// 한 번에 모든 페이지 정보를 받아오는 것은 비효율적이라고 생각했기 때문에 페이지를
// 누를 때마다 해당 페이지에 해당하는 정보들을 받아오려고 했다.

export const COMMENT_POST_REQUEST = 'COMMENT_POST_REQUEST';
export const COMMENT_POST_SUCCESS = 'COMMENT_POST_SUCCESS';
export const COMMENT_POST_FAILURE = 'COMMENT_POST_FAILURE'; 
//제목을 눌렀을 때 뜨는 페이지
//제목, 내용, 작성자, 작성 시간, 댓글 내용 등이 나옴
//댓글 내용(댓글의 번호, 댓글을 입력한 사람의 nickname, 댓글을 입력한 시간, 좋아요 수)


export const NEW_POST_REQUEST = 'NEW_POST_REQUEST';
export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const NEW_POST_FAILURE = 'NEW_POST_FAILURE';
// 새로운 글을 쓸 때 요청하는 작업
// input에 입력한 값을 서버로 nickname, 등록 시간과 함께 전송해준다.


export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
//댓글에 답글을 달 때
//좀 더 생각해보기

export const board = (state = initialState, action) => {
  switch(action.type){
    case BOARD_DATA_REQUEST:
      return state;
    case BOARD_DATA_SUCCESS:
      return state;
    case BOARD_DATA_FAILURE:
      return state;
      
    case COMMENT_POST_REQUEST:
      return state;
    case COMMENT_POST_SUCCESS:
      state = commentPost(state, action);
      return state;
    case COMMENT_POST_FAILURE:
      return state;
    case NEW_POST_REQUEST:    //새로운 댓글 달기
      return state;
    case NEW_POST_SUCCESS:
      
      return state;
    case NEW_POST_FAILURE:
      return state;
    case ADD_COMMENT_REQUEST:
      return state;
    case ADD_COMMENT_SUCCESS:
      return state;
    case ADD_COMMENT_FAILURE:
    default:
      return state;
  }
}

function commentPost(state, action) {
  const idx = action.data.id
  state[idx - 1].comments = [   //댓글 달기 기능인데 서버랑 연결하면 지울 듯
    ...state[idx - 1].comments,
    {
      id: state[idx - 1].comments.length + 1,
      writer: action.data.nickname,
      contents: action.data.content,
      time: '2020.08.29 20:03',
      like: 0,
      comments: [],
    }
  ]
  console.log(state);
  return state;
}