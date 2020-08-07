const initialState = {
  isLogin: true, //로그인 여부를 확인
  id: "태완짱짱",
  name: "강태완",
  nickname: "clever",
  school: "seoul national univ",
  mail: "abcde@naver.com" 
}

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        name: action.data.username,
      }
    case LOGIN_FAILURE:
      return state;
    case LOGOUT_REQUEST:
      return state;
    case LOGOUT_SUCCESS:
      return {
        isLogin: "",
        id: "",
        nickname: "",
        school: "",
        mail: "" 
      }
    case LOGOUT_FAILURE:
    default:
      return state;
  }
};

