import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatLoaded } from "../../redux/actions";
import DropdownMenu from "./DropdownMenu";
import OnlineIndicator from "../common/OnlineIndicator";

function Contact({ fullname, lastMessage, _id, online }) {
  const myId = useSelector((state) => state.profile._id);
  const opened = useSelector((state) => state.chat.opened);
  const dispatch = useDispatch();

  const [showDots, setShowDots] = useState(false);

  const handleClick = () => {
    if (_id !== opened) {
      dispatch(chatLoaded(myId, _id))
    }
  }

  const handleMouseEnter = () => {
    setShowDots(true)
  };

  const handleMouseLeave = () => {
    setShowDots(false)
  };
  //TODO вынести аватар в компонент с пропсом онлайн
  return (
    <div
      className={_id === opened ? "chats-item-opened" : "chats-item"}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="avatar">
        <OnlineIndicator customClass="online-indicator-contact" />
        {fullname[0]}
      </div>
      <div>
        <div>{fullname}</div>
        <div className="last-message">
          {lastMessage.substring(0, 18) + "..."}
        </div>
      </div>
      <div className="recent-chats-time">
        {showDots ? <DropdownMenu/> : '5 min'}
      </div>
    </div>
  );
}

export default Contact;
