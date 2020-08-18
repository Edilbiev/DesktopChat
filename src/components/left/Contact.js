import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatLoaded } from "../../redux/actions";

function Contact({ fullname, lastMessage, _id }) {
  const myId = useSelector((state) => state.profile._id);
  const opened = useSelector((state) => state.chat.opened);
  const dispatch = useDispatch();

  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdown)
  }
  console.log('RENDER');


  return (
    <div
      className={_id === opened ? "chats-item-opened" : "chats-item"}
      onClick={() => dispatch(chatLoaded(myId, _id))}
    >
      <div className="avatar">{fullname[0]}</div>
      <div>
        <div>{fullname}</div>
        <div className="last-message">
          {lastMessage.substring(0, 18) + "..."}
        </div>
      </div>
      <div className="recent-chats-time">
        <button className="dots" onClick={handleClick}>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </button>
        <p>5 min</p>
      </div>
    </div>
  );
}

export default Contact;
