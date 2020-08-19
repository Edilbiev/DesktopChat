import React from "react";
import ContactSearch from "./ContactSearch";
import RecentChats from "./RecentChats";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <ContactSearch />
        <RecentChats />
      </div>
    </div>
  );
}

export default Sidebar;
