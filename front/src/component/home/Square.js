import React from "react";
import styled from "styled-components";
import {
  InstagramOutlined,
  YoutubeOutlined,
  Html5Outlined,
} from "@ant-design/icons";
const Box = styled.div`
  width: 33%;
  height: 20rem;
  align-content: center;
  justify-content: center;
  display: flex;
  background-color: #ffffff;
  .icon {
    font-size: 17rem;
    padding: 2rem;
  }
`;

function Square() {
  const onClick = (e) => {
    console.log(e.target);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box style={{ background: "#ffd6f5" }}>
        <a href="/mentor">
          <InstagramOutlined className="icon" onClick={onClick} />
        </a>
      </Box>
      <Box>
        <a href="/mentee">
          <YoutubeOutlined className="icon" />
        </a>
      </Box>
      <Box style={{ background: "#c9fff2" }}>
        <a href="/board">
          <Html5Outlined className="icon" />
        </a>
      </Box>
    </div>
  );
}

export default Square;
