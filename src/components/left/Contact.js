import React from "react";
import ContactWithLastMessage from "./ContactWithLastMessage";
import ContactWithoutLastMessage from "./ContactWithoutLastMessage";

function Contact({ item }) {
  
  return item.hasOwnProperty("lastMessage") ? (
    <ContactWithLastMessage {...item}/>
  ) : (
    <ContactWithoutLastMessage {...item} />
  );
}

export default Contact;
