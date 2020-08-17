import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import RecentChatSkeleton from "../common/skeletons/RecentChatsSkeleton";

function RecentChats() {
  const items = useSelector(({ application, contacts }) => {
    const { contactSearchString } = application;
    return contacts.items.filter(({ fullname }) => {
      return (
        fullname.toUpperCase().indexOf(contactSearchString.toUpperCase()) !== -1
      );
    });
  });

  const loading = useSelector((state) => state.contacts.loading);
  const skeletonList = Array(20).fill(1);

  return loading
    ? skeletonList.map(() => <RecentChatSkeleton lines={20} />)
    : items.map((item) => <Contact {...item} />);
}

export default RecentChats;
