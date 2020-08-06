import React from "react";
import styled from "styled-components";
import {
  InstagramOutlined,
  YoutubeOutlined,
  Html5Outlined,
} from "@ant-design/icons";
const Box = styled.div`
  width: 33%;
  height: 300px;
  border: 1px solid black;
  .icon {
    font-size: 17rem;
    padding: 1rem;
  }
  &:hover {
    background-color: #e4ddff;
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
      <Box>
        <a>
          <InstagramOutlined className="icon" onClick={onClick} />
        </a>
      </Box>
      <Box>
        <a>
          <YoutubeOutlined className="icon" />
        </a>
      </Box>
      <Box>
        <a>
          <Html5Outlined className="icon" />
        </a>
      </Box>
    </div>
  );
}

export default Square;
