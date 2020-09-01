import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import SkeletonList from "../common/skeletons/SkeletonList";
import moment from "moment";
import {useParams} from "react-router-dom";

function RecentChats() {

  console.log(useParams())
  const items = useSelector(({ application, contacts }) => {
    const { contactSearchString } = application;
    return contacts.items.filter(({ fullname }) => {
      return (
        fullname.toUpperCase().indexOf(contactSearchString.toUpperCase()) !== -1
      );
    });
  });

  const itemsSortedByTime = items.sort((a, b) => {
    return (
      a.lastMessage && moment(b.lastMessage.time) - moment(a.lastMessage.time)
    );
  });

  const loading = useSelector((state) => state.contacts.loading);

  return loading ? (
    <SkeletonList />
  ) : (
    itemsSortedByTime.map((item) => <Contact key={item._id} item={item} />)
  );
}

export default RecentChats;
