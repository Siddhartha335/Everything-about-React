import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagAction } from '../store/BagSlice'

const DisplayItem = ({item}) => {
  const bag = useSelector((store)=> store.bag)
  const bagFound = bag.indexOf(item.id) >=0;

  const dispatch = useDispatch()

  const addToBag = ()=> {
    dispatch(bagAction.addToBag(item.id))
  }
  const removeFromBag = ()=> {
    dispatch(bagAction.removeFromBag(item.id))
  }

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs ${item.current_price}</span>
          <span className="original-price">Rs ${item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bagFound ?
      <button className="btn-add-bag btn btn-danger" onClick={removeFromBag}> Remove from Bag</button> :
      <button className="btn-add-bag" onClick={addToBag}> Add to Bag</button>}
    </div>
  )
}

export default DisplayItem