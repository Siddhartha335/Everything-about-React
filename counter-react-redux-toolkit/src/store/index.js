import { configureStore,createSlice } from "@reduxjs/toolkit";

// const counterReducer = (store = INITIAL_DATA, action) => {
//   let newStore = store;
//   if (action.type === "INCREMENT") {
//     newStore = { counter: store.counter + 1, privacy: store.privacy };
//   } else if (action.type === "DECREMENT") {
//     newStore = { counter: store.counter - 1, privacy: store.privacy };
//   } else if (action.type === "RESET") {
//     newStore = { counter: 0, privacy: store.privacy };
//   } else if (action.type === "ADD") {
//     newStore = {
//       counter: action.payload.number + store.counter,
//       privacy: store.privacy,
//     };
//   } else if (action.type === "PRIVACY") {
//     newStore = { counter: store.counter, privacy: !store.privacy };
//   }
//   return newStore;
// };

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++
    },
    decrement: (state) => {
      state.counterVal--;

    },
    reset: (state) => {
      state.counterVal = 0
    },
    add: (state,action) => {
      state.counterVal += action.payload.number
    },
  },
});

const privacySlice = createSlice({
  name:'privacy',
  initialState:false,
  reducers:{
    toggle: (state) => {
      return state = !state
    }
  }
})

const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer,privacy:privacySlice.reducer }
});

export const counterActions = counterSlice.actions
export const privacyActions = privacySlice.actions

export default counterStore;
