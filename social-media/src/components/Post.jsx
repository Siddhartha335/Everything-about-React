import React, { useContext } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {

  const {deletePost} = useContext(PostListContext)

  return (
    <div className="card my-3 mx-3 post w-50">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> (deletePost(post.id))}>
          <MdOutlineDeleteOutline />
          </span>
        </h5>
        <h6 className="card-text">{post.body}</h6>
        {post.tags.map((tag, index) => (
          <span className="badge text-bg-primary mx-1" key={index}>
            {tag}
          </span>
        ))}
        <p className="card-text mt-3">
          This post has been reacted by {post.reactions} people.
        </p>
      </div>
    </div>
  );
};

export default Post;
