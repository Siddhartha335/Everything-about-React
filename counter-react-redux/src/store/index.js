import { createStore } from "redux";

const INITIAL_DATA = {
  counter: 0,
  privacy:false
};

const counterReducer = (store = INITIAL_DATA, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = {  ...INITIAL_DATA,counter: store.counter + 1,};
  } else if (action.type === "DECREMENT") {
    newStore = { ...INITIAL_DATA, counter: store.counter - 1, };
  } else if (action.type === "RESET") {
    newStore = { ...INITIAL_DATA ,counter: 0};
  } else if (action.type === "ADD") {
    newStore = { ...INITIAL_DATA ,counter: action.payload.number + store.counter};
  } else if (action.type === "PRIVACY") {
    newStore = { ...INITIAL_DATA,privacy:!store.privacy };
  }
  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
