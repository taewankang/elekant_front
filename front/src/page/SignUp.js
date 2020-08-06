import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SignUpContent from "../component/signUp/SignUpContent";
const SignUp = ({ history }) => {
  const { isLogin } = useSelector((state) => state.user);
  useEffect(() => {
    //로그인이 되어 있을 때 signUp화면으로 들어가는 것을 방지 하기 위해 선언
    if (isLogin) {
      alert("로그인이 되어 있습니다.");
      history.push("/");
    }
  }, []);

  return (
    <div>
      <SignUpContent />
    </div>
  );
};

export default SignUp;
