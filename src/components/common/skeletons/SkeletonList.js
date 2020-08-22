import React from 'react';
import RecentChatSkeleton from "./RecentChatsSkeleton";

function SkeletonList() {
  const skeletonList = Array(20).fill(1);

  return skeletonList.map((_, index) => <RecentChatSkeleton lines={20} key={index} />)
}

export default SkeletonList;
