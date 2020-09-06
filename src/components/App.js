import React, { useEffect } from "react";
import Sidebar from "./left/Sidebar";
import ChatWindow from "./center/ChatWindow";
import { useDispatch, useSelector } from "react-redux";
import { contactsLoaded, profileLoaded } from "../redux/actions";
import SettingsBar from "./right/SettingsBar";
import { useParams } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.profile.loading);
  const opened = useParams().id;

  useEffect(() => {
    dispatch(contactsLoaded());
    dispatch(profileLoaded());
  }, [dispatch]);

  if (loading) {
    return null;
  }

  return (
    <div className="app">
      <Sidebar />
      <ChatWindow />
      <SettingsBar />
    </div>
  );
}

export default App;
