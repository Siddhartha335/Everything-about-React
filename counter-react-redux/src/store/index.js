import { createStore } from "redux";

const INITIAL_DATA = {
  counter: 0,
  privacy:false
};

const counterReducer = (store = INITIAL_DATA, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1, privacy:store.privacy };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1, privacy:store.privacy  };
  } else if (action.type === "RESET") {
    newStore = { counter: 0,privacy:store.privacy };
  } else if (action.type === "ADD") {
    newStore = { counter: action.payload.number + store.counter , privacy:store.privacy };
  } else if (action.type === "PRIVACY") {
    newStore = { counter:store.counter,privacy:!store.privacy };
  }
  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
