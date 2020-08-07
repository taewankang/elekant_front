/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { AppleOutlined } from "@ant-design/icons";
import Square from "./Square";
const BeforeLoginContent = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: 300,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://t1.daumcdn.net/cfile/tistory/272FF03E560CE4D226"
          style={{ height: 300 }}
        />
      </div>
      <Square />
    </div>
  );
};

export default BeforeLoginContent;
