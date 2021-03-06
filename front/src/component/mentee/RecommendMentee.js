import React from 'react';
import {
  RecommendContainer, Title, FilterContainer,
  SearchInput, FilterButton, MenteeContainer,
} from './style';
import 'antd/dist/antd.css';
import { Menu, Dropdown, message, } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import MenteeBox from './MenteeBox';
import { useSelector } from 'react-redux';

function handleMenuClick(e) {
  message.info('Click on menu item.');
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">소프트웨어</Menu.Item>
    <Menu.Item key="2">축구</Menu.Item>
    <Menu.Item key="3">롤</Menu.Item>
  </Menu>
);

const RecommendMentee = () => {
  const state = useSelector(state => state.mentee);
  return (
    <RecommendContainer>
      <Title style={{marginTop: '40px'}}>추천 멘토</Title>
      <FilterContainer>
        <Dropdown trigger='click' overlay={menu}>
        <FilterButton>관심 분야 <DownOutlined /></FilterButton>
        </Dropdown>
      <SearchInput placeholder="검색" />
      </FilterContainer>
      <MenteeContainer>
        {
          state.map((item, idx) => {
            return (
              <MenteeBox 
                key={idx}
                username={item.username}
                sentence={item.sentence}
                subject={item.subject}/>
            )
          })
        }
      </MenteeContainer>
    </RecommendContainer>
  )
}

export default RecommendMentee