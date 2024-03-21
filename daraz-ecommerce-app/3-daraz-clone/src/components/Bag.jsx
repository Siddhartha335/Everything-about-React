import React from "react";
import BagSummary from "./BagSummary";
import BagItem from "./BagItem";
import {useSelector} from "react-redux"

const Bag = () => {
  
  const bag = useSelector(store => store.bag);
  const items = useSelector(store => store.items);

  const finalItems = items.filter((item)=> {
    const itemIndex = bag.indexOf(item.id);
    return itemIndex >=0;
  })


  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
          {finalItems.map((item)=> (
            <BagItem item={item} />
          ))}        
          </div>
          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
