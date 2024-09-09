import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./index.css";
import Sidebarvideo from "./Sidebarvideo";
import Feedvideo from "./Feedvideo";
import Header from "./Header";
import SidebarGroup from "./SidebarGroup";
import SidebarMarketplace from "./SidebarMarketplace";
import FeedMarketplace from "./FeedMarketplace";
import SidebarGame from "./SidebarGame";
import FeedGame from "./FeedGame";

const Index = (props) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="app">
        <div className="linearprogress">
          <Header selected={selected} setSelected={setSelected} />
        </div>
        {selected == 0 && (
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )}
        {selected == 1 && (
          <div className="app_body">
            <Sidebarvideo />
            <Feedvideo />
          </div>
        )}
        {selected == 2 && (
          <div className="app_body">
            <SidebarMarketplace />
            <FeedMarketplace />
          </div>
        )}
        {selected == 3 && (
          <div className="app_body">
            <SidebarGroup />
            <Feedvideo />
          </div>
        )}
        {selected == 4 && (
          <div className="app_body">
            <SidebarGame />
            <FeedMarketplace />
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
