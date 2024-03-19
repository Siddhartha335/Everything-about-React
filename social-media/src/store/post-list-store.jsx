import { createContext, useReducer,useState,useEffect} from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching:false
});

const postReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_ITEM") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "ADD_ITEM") {
    newPostList = [action.payload, ...currPostList];
  }
   else if (action.type === "ADD_INITIALITEM") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postReducer, []);
  const [fetching, setFetching] = useState(false);


  const addPost = (post) => {
    const addItemAction = {
      type: "ADD_ITEM",
      payload: post,
    };
    dispatchPostList(addItemAction);
  };

  const addInitialPost = (posts) => {
    const addInitialItemAction = {
      type: "ADD_INITIALITEM",
      payload: {
        posts
      },
    };
    dispatchPostList(addInitialItemAction);
  };

  const deletePost = (id) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        id,
      },
    };
    dispatchPostList(deleteItemAction);
  };

  useEffect(() => {
    setFetching(true);
    //Advanced useEffect
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost,fetching}}>
      {children}
    </PostListContext.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: 1,
//     title: "Going To Pokhara",
//     body: "Yo Facebook, I am going to Pokhara to enjoy with my friends",
//     reactions: 1,
//     userId: "user-10",
//     tags: ["vacation", "enjoyment", "Pokhara"],
//   },
//   {
//     id: 2,
//     title: "Going To Mustang",
//     body: "Yo Facebook, I am going to Mustang to enjoy with my friends",
//     reactions: 10,
//     userId: "user-8",
//     tags: ["vacation", "enjoyment", "Mustang", "Diaries"],
//   },
// ];

export default PostListProvider;
