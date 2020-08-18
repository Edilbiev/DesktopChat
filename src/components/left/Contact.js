import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatLoaded } from "../../redux/actions";
import DropdownMenu from "./DropdownMenu";

function Contact({ fullname, lastMessage, _id }) {
  const myId = useSelector((state) => state.profile._id);
  const opened = useSelector((state) => state.chat.opened);
  const dispatch = useDispatch();

  const [showDots, setShowDots] = useState(false);

  const handleMouseEnter = () => {
    setShowDots(true)
  };

  const handleMouseLeave = () => {
    setShowDots(false)
  };

  return (
    <div
      className={_id === opened ? "chats-item-opened" : "chats-item"}
      onClick={() => dispatch(chatLoaded(myId, _id))}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="avatar">{fullname[0]}</div>
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
