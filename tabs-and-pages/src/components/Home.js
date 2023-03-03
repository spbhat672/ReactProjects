import React from 'react';
import { Tabs } from 'antd';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const { TabPane } = Tabs;

function Home() {
  function callback(key) {
    console.log(key);
  }

  const tabBarStyle = {
    backgroundColor: '#f1f1f1',
    borderBottom: 'none',
    marginBottom: '0',
    paddingLeft: '10px',
    paddingRight: '10px',
  };

  const tabStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px 5px 0 0',
    borderBottom: 'none',
    height: '34px',
    lineHeight: '34px',
    paddingLeft: '10px',
    paddingRight: '10px',
    position: 'relative',
    top: '-1px',
    marginRight: '3px',
    cursor: 'pointer',
  };

  const activeTabStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderBottom: 'none',
    borderRadius: '5px 5px 0 0',
    height: '34px',
    lineHeight: '34px',
    paddingLeft: '10px',
    paddingRight: '10px',
    position: 'relative',
    top: '-1px',
    marginRight: '3px',
    cursor: 'pointer',
  };

  return (
    <Tabs defaultActiveKey="1" onChange={callback} tabBarStyle={tabBarStyle}>
      <TabPane tab="Tab 1" key="1" tabStyle={tabStyle} activeTabStyle={activeTabStyle}>
        <Tab1/>
      </TabPane>
      <TabPane tab="Tab 2" key="2" tabStyle={tabStyle} activeTabStyle={activeTabStyle}>
        <Tab2/>
      </TabPane>
      <TabPane tab="Tab 3" key="3" tabStyle={tabStyle} activeTabStyle={activeTabStyle}>
        <Tab3/>
      </TabPane>
    </Tabs>
  );
}

export default Home;
