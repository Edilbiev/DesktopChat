import React from "react";
import { useSelector } from "react-redux";
import SkeletonList from "../common/skeletons/SkeletonList";
import Contact from "./Contact";
import dayjs from "dayjs";

function Contacts() {
  const items = useSelector(({ application, contacts }) => {
    const { contactSearchString } = application;
    return contacts.items.filter(({ fullname }) => {
      return (
        fullname.toUpperCase().indexOf(contactSearchString.toUpperCase()) !== -1
      );
    });
  });

  const itemsSortedByTime = items.sort((a, b) => {
    return dayjs(b.lastMessage?.time) - dayjs(a.lastMessage?.time);
  });

  const loading = useSelector((state) => state.contacts.loading);

  return loading ? (
    <SkeletonList />
  ) : (
    itemsSortedByTime.map((item) => <Contact key={item._id} {...item} />)
  );
}

export default Contacts;
