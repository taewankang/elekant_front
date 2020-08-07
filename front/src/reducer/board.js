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

export const board = (state = initialState, action) => {
  switch(action.type){

    default:
      return state;
  }
}