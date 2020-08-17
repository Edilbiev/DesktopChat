import React from "react";
import Search from "./Search";
import RecentChats from "./RecentChats";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <Search />
        <RecentChats />
      </div>
    </div>
  );
}

export default Sidebar;
