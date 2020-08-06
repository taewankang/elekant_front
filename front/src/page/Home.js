import React from "react";
import BeforeLoginContent from "../component/home/BeforeLoginContent";
import AfterLoginContent from "../component/home/AfterLoginContent";
import { useSelector } from "react-redux";

const Home = () => {
  //메인 화면에서 메뉴를 제외하고 보여줄 화면(메뉴는 App.js제일 위에 보여줄 것)
  const { isLogin } = useSelector((state) => state.reducer); //로그인 여부에 따라 메인 화면을 변경해줘야 하기 때문에

  return (
    <div>
      {/* 메뉴 아래 부분 렌더링 화면 */}
      {isLogin ? <AfterLoginContent /> : <BeforeLoginContent />}
      홈화면입니다.
    </div>
  );
};

export default Home;
