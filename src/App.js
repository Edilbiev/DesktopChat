import React, { useEffect } from "react";
import Sidebar from "./components/left/Sidebar";
import ChatWindow from "./components/center/ChatWindow";
import { useDispatch } from "react-redux";
import { contactsLoaded, profileLoaded } from "./redux/actions";
import SettingsBar from "./components/right/SettingsBar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsLoaded());
    dispatch(profileLoaded());
  }, [dispatch]);

  return (
    <div className="app">
      <Sidebar />
      <ChatWindow />
      <SettingsBar />
    </div>
  );
}

export default App;
