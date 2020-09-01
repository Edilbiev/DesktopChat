import React from "react";
import ContactSearch from "./ContactSearch";
import RecentChats from "./RecentChats";
import {useParams} from "react-router-dom"

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
