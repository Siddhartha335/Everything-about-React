import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const navigate = useNavigate();

  let titleRef = useRef("");
  let bodyRef = useRef("");
  let reacRef = useRef("");
  let userRef = useRef("");
  let tagRef = useRef("");

  const showValues = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    const reactions = reacRef.current.value;
    const userId = userRef.current.value;
    let tags = tagRef.current.value;
    tags = tags.split(" ");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        body,
        reactions,
        userId,
        tags,
      }),
    })
      .then((res) => res.json())
      .then((resObj) =>
       addPost(resObj));

    titleRef.current.value = "";
    bodyRef.current.value = "";
    reacRef.current.value = "";
    userRef.current.value = "";
    tagRef.current.value = "";
    navigate("/");
  };

  return (
    <form className="container mt-3 w-75" onSubmit={showValues}>
      <h3 className="text-center my-2">Create a Post</h3>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={titleRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Post Body
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          ref={bodyRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          ref={reacRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          ref={userRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          ref={tagRef}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
