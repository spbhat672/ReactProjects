import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Tab1 from "./Tab1";

function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <Tabs activeKey={activeTab} onSelect={handleTabSelect}>
      <Tab eventKey={0} title="Tab 1">
        <Tab1/>
      </Tab>
      <Tab eventKey={1} title="Tab 2">
        <p>Content for Tab 2 goes here.</p>
      </Tab>
      <Tab eventKey={2} title="Tab 3">
        <p>Content for Tab 3 goes here.</p>
      </Tab>
    </Tabs>
  );
}

export default Home;
