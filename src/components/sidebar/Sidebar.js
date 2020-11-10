import React from "react";
import ContactSearch from "./ContactSearch";
import Contacts from "./Contacts";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <ContactSearch />
        <Contacts />
      </div>
    </div>
  );
}

export default Sidebar;
