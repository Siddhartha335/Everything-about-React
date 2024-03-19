import { useSelector } from "react-redux";
import "./App.css";
import Buttons from "./components/Buttons";
import CounterValue from "./components/CounterValue";
import Heading from "./components/Heading";
import Private from "./components/Private";

function App() {
  const privacy = useSelector((store) => store.privacy)
  return (
    <div className="container-fluid">
      <Heading />
      {!privacy ? <CounterValue /> : <Private />}
      <Buttons />
    </div>
  );
}

export default App;
