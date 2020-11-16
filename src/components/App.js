import React, { useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import ChatWindow from "./chat/ChatWindow";
import { useDispatch, useSelector } from "react-redux";
import { contactsLoaded, profileLoaded } from "../redux/actions";
import ProfileBar from "./profile/ProfileBar";
import {CSSTransition} from "react-transition-group";
import GitHub from "./common/GitHub/GitHub";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";

function App() {
  const dispatch = useDispatch();
  const profileLoading = useSelector((state) => state.profile.loading);
  const contactsLoading = useSelector((state) => state.contacts.loading);
  const settingsBarOpened = useSelector(
    (state) => state.application.settingsBarOpened
  );

  dayjs.extend(updateLocale);
  dayjs.updateLocale("en", {
    weekdays: [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
  });


  useEffect(() => {
    dispatch(contactsLoaded());
    dispatch(profileLoaded());
  }, [dispatch]);

  if (profileLoading || contactsLoading) {
    return null;
  }

  return (
    <div className="app">
      <Sidebar />
      <ChatWindow />
      <CSSTransition
        in={settingsBarOpened}
        timeout={300}
        classNames="transition"
        unmountOnExit
      >
        <ProfileBar />
      </CSSTransition>
      <GitHub />
    </div>
  );
}

export default App;
