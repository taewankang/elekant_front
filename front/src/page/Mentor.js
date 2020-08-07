import React from "react";
import styled from "styled-components";
const Mymentor = styled.div`
  width: 50%;
  height: inherit;
  border: 1px solid black;
`;
const Container = styled.div`
  display: flex;
  margin-top: 5rem;
  width: 100%;
  height: 40rem;
  border: 1px solid red;
`;
const Mento = () => {
  return (
    <Container>
      <Mymentor></Mymentor>
      <Mymentor></Mymentor>
    </Container>
  );
};

export default Mento;
