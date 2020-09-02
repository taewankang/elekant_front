//마이 페이지 - 멘토 인증
import React, { useState } from 'react';
import { Container, Title, Block, Bold } from './style';
import { Select } from 'antd';
const Option = Select.Option;

const IdentifyMento = () => {
  return (
    <Container>
      <Title>멘토 인증</Title>
      <Block>
        <Bold>멘토 인증</Bold>
        <input />
        &nbsp;@ &nbsp;
        <Select defaultValue="naver.com" style={{ width: 180 }}>
          <Option value="naver.com">naver.com</Option>
          <Option value="samsung.com">samsung.com</Option>
          <Option value="kakao.com">kakao.com</Option>
        </Select>
        <div>
          <button>인증</button>
        </div>
      </Block>
    </Container>
  );
};

export default IdentifyMento;
