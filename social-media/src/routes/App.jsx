import Navbar from "../components/Navbar";
import "./App.css";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { useState } from "react";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  // const [click, setClick] = useState("Home");

  // const showChanges = (e) => {
  //   setClick(e);
  // };

  return (
    <PostListProvider>
      <div className="sidebar">
        <div className="div1">
          {/* <SideBar click={click} showChanges={showChanges} /> */}
          <SideBar/>
        </div>
        <div className="div2">
          <Navbar />
            <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
