import React from "react";
import DisplayItem from "../components/DisplayItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  function shuffleArray(array) {
    const copy = [...array]; // Create a shallow copy of the array
    return copy.sort(() => Math.random() - 0.5);
  }
  const shuffledItems = shuffleArray(items);
  return (
    <main>
      <div className="items-container">
        {shuffledItems.map((item, index) => {
          return <DisplayItem key={index} item={item} />;
        })}
      </div>
    </main>
  );
};

export default Home;
