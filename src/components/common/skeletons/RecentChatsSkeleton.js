import React from "react";
import Skeleton from "react-loading-skeleton";

function RecentChatSkeleton() {
  return (
    <div className="recent-chat-skeleton">
      <div className="recent-chat-skeleton-circles">
        <Skeleton count={1} circle={true} width={35} height={35} />
      </div>
      <div className="recent-chat-skeleton-lines">
        <Skeleton count={1} height={16} />
        <Skeleton count={1} height={13} />
      </div>
    </div>
  );
}

export default RecentChatSkeleton;
