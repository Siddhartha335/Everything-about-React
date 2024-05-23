import Navbar from "../components/Navbar";
import "./App.css";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
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
