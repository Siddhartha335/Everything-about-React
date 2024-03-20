const redux = require("redux");

const INITIAL_VALUE = {
    counter:0
}

const reducer = (state=INITIAL_VALUE,action) => {
    let newState = state;
    if(action.type === "INCREMENT") {
        newState = {counter:state.counter + 1}
    }
    else if(action.type === "DECREMENT") {
        newState = {counter:state.counter - 1}
    }
    else if(action.type === "ADD") {
        newState = {counter:state.counter + action.payload.number}
    }
    return newState
}

const store = redux.createStore(reducer);

const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);

store.dispatch({type:"INCREMENT"})
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"DECREMENT"})
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"DECREMENT"})
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"ADD",payload:{number:9}})