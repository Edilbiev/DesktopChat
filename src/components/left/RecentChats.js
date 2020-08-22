import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import RecentChatSkeleton from "../common/skeletons/RecentChatsSkeleton";
import SkeletonList from "../common/skeletons/SkeletonList";

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

  return loading
    ? <SkeletonList />
    : items.map((item) => <Contact key={item._id} {...item} />);
}

export default RecentChats;
