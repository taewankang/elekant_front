const initialState = {
  isLogin: true, //로그인 여부를 확인
  state: 'mentor', //나는 멘티인가 멘토인가
  id: '태완짱짱', //로그인 하는 아이디
  name: '강태완', //이건 왜 만들었지 흠..
  nickname: 'clever', //화면에 띄울 닉네임
  school: 'seoul national univ', //학교 => 배열로 바꿔야되는군
  mail: 'abcde@naver.com', //메일
  mentor: [
    {
      id: 1,
      subject: '컴퓨터',
      nickname: '한동훈',
      newMessage: true, //새로운 글이 있는지
      lastLogin: '2020-08-06 17:00:00',
      sentence: '잘하자',
    },
    {
      id: 2,
      subject: '축구',
      nickname: '이상하',
      newMessage: false, //새로운 글이 있는지
      lastLogin: '2020-08-06 17:00:00',
      sentence: '잘하자',
    },
    {
      id: 3,
      subject: '컴퓨터',
      nickname: '한동훈',
      newMessage: true, //새로운 글이 있는지
      lastLogin: '2020-08-06 17:00:00',
      sentence: '잘하자',
    },
    {
      id: 4,
      subject: '축구',
      nickname: '이상하',
      newMessage: false, //새로운 글이 있는지
      lastLogin: '2020-08-06 17:00:00',
      sentence: '잘하자',
    },
    {
      id: 5,
      subject: '컴퓨터',
      nickname: '한동훈',
      newMessage: true, //새로운 글이 있는지
      lastLogin: '2020-08-06 17:00:00',
      sentence: '잘하자',
    },
    {
      id: 6,
      subject: '축구',
      nickname: '이상하',
      newMessage: false, //새로운 글이 있는지
      lastLogin: '2020-08-06 17:00:00',
      sentence: '잘하자',
    },
    {
      id: 7,
      subject: '컴퓨터',
      nickname: '한동훈',
      newMessage: true, //새로운 글이 있는지
      lastLogin: '2020-08-06 17:00:00',
      sentence: '잘하자',
    },
    {
      id: 8,
      subject: '축구',
      nickname: '이상하',
      newMessage: false, //새로운 글이 있는지
      lastLogin: '2020-08-06 17:00:00',
      sentence: '잘하자',
    },
  ],
  mentee: [],
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FALURE';

export const CHANGE_USERINFO_REQUEST = 'CHANGE_USERINFO_REQUEST';
export const CHANGE_USERINFO_SUCCESS = 'CHANGE_USERINFO_SUCCESS';
export const CHANGE_USERINFO_FAILURE = 'CHANGE_USERINFO_FAILURE';

export const WITHDRAWAL_REQUEST = 'WITHDRAWAL_REQUEST';
export const WITHDRAWAL_SUCCESS = 'WITHDRAWAL_SUCCESS';
export const WITHDRAWAL_FAILURE = 'WITHDRAWAL_FAILURE';

export const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        name: action.data.username,
      };
    case LOGIN_FAILURE:
      return state;

    case LOGOUT_REQUEST:
      return state;
    case LOGOUT_SUCCESS:
      return {
        isLogin: '',
        id: '',
        nickname: '',
        school: '',
        mail: '',
      };
    case LOGOUT_FAILURE:
      return state;

    case SIGN_UP_REQUEST:
      return state;
    case SIGN_UP_SUCCESS:
      return state;
    case SIGN_UP_FAILURE:
      return state;

    case CHANGE_USERINFO_REQUEST:
      return state;
    case CHANGE_USERINFO_SUCCESS:
      return state;
    case CHANGE_USERINFO_FAILURE:
      return state;

    case WITHDRAWAL_REQUEST:
      return state;
    case WITHDRAWAL_SUCCESS:
      return state;
    case WITHDRAWAL_FAILURE:
      return state;
    default:
      return state;
  }
};
