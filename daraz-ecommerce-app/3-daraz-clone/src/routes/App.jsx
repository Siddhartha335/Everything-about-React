import { Outlet } from "react-router-dom";
import Footers from "../components/Footers";
import Headers from "../components/Headers";
import FetchItems from "../components/FetchItems";
import LoadingSpinner from "../components/LoadingSpinner"
import { useSelector } from "react-redux";
// import {items} from "./data/items"

function App() {

  const {fetchDone} = useSelector((store)=> store.fetchStatus)

  return (
    <>
      <Headers />
        <FetchItems />
        {!fetchDone ? <LoadingSpinner /> : <Outlet />}  
      <Footers />
    </>
  );
}

export default App;
