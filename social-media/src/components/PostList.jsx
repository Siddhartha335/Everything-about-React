import React, { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 ? (
        <WelcomeMessage />
      ) : (
        postList.map((post, index) => {
          return <Post post={post} key={index} />;
        })
      )}
    </>
  );
};

export default PostList;
