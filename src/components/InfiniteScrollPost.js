import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { deletePost } from "../utils/Post";
import { userVote } from "../utils/Post";
import PostContent from "./PostContent";

export const InfiniteScrollPost = ({
  posts,
  user,
  userConnected,
  onProfile,
  refetch,
  offset,
  setOffset,
}) => {
  const deletePostDisplay = (id) => {
    refetch(posts.filter((postId) => postId.id !== id));
  };

  const hasMore = posts.length >= 5;
  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={() => setOffset(offset + 5)}
      hasMore={hasMore}
    >
      {posts.map((post) => (
        <PostContent
          userConnected={userConnected}
          key={post.id}
          post={post}
          onProfile={onProfile ?? false}
          user={user}
          onClickDelete={() => {
            deletePostDisplay(post.id);
            deletePost(post.id, user.role);
          }}
          onClickUpVote={(vote, id) => userVote(vote, id)}
          onClickDownVote={(vote, id) => userVote(vote, id)}
        />
      ))}
    </InfiniteScroll>
  );
};
