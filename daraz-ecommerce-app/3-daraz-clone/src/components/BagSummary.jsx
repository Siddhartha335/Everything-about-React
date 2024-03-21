import React from "react";
import { useSelector } from "react-redux";

const BagSummary = () => {
  const bag = useSelector(store => store.bag);
  const items = useSelector(store => store.items);
  const finalItems = items.filter((item)=> {
    const itemIndex = bag.indexOf(item.id);
    return itemIndex >=0;
  })
  let price=0;
  let discount=0
  finalItems.forEach(item => {
    price += item.original_price;
    discount +=  item.original_price - item.current_price
  });
  const finalPayment = Math.round(price - discount + 99);

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({bag.length} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{price}</span>
        </div>
        <div className="price-item">
          <span className="przice-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{discount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagSummary;
