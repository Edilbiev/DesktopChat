import React, { useEffect } from "react";
import Sidebar from "./left/Sidebar";
import ChatWindow from "./center/ChatWindow";
import { useDispatch } from "react-redux";
import { contactsLoaded, profileLoaded } from "../redux/actions";
import SettingsBar from "./right/SettingsBar";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsLoaded());
    dispatch(profileLoaded());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        <Route path='/:id?'>
          <Sidebar />
          <ChatWindow />
          <SettingsBar />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
