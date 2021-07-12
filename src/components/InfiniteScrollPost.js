import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { deletePost } from "../utils/Post";
import { upVote, downVote } from "../utils/Post";
import PostContent from "./PostContent";

export const InfiniteScrollPost = ({
  posts,
  user,
  userConnected,
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
          user={user}
          onClickDelete={() => {
            deletePost(post.id, user.role);
            deletePostDisplay(post.id);
          }}
          onClickUpVote={(vote, id) => upVote(vote, id)}
          onClickDownVote={(vote, id) => downVote(vote, id)}
        />
      ))}
    </InfiniteScroll>
  );
};
