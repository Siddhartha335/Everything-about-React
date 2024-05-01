import React, { useReducer, useRef } from 'react';

// Define the types
type CounterState = number;


type UpdateAction = {
    type:"INC"|"DEC"|"ADD";
    payload:number
}

type ResetAction = {
    type:"RES"
}

type CounterAction = UpdateAction | ResetAction

// Define the reducer
const counterReducer = (currState: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case "INC":
            return currState + action.payload;
        case "RES":
            return INIITIAL;
        case "DEC":
            return currState - action.payload;
        case "ADD":
            return currState + action.payload;
        default:
            return currState;
    }
};

const INIITIAL=0

// Define the Counter component
const Counter = () => {

    const counterValue = useRef<HTMLInputElement>(null)

    const [counter, dispatchCounter] = useReducer(counterReducer, INIITIAL);

    const handleInc = () => {
        dispatchCounter({ type: "INC", payload: 1 });
    };

    const handleRes = () => {
        dispatchCounter({ type: "RES"});
    };

    const handleDec = () => {
        dispatchCounter({ type: "DEC", payload: 1 });
    };

    const handleAdd = () => {
        dispatchCounter({type:"ADD",payload:Number(counterValue.current?.value)})
    }

    return (
        <>
        <div>
            <div>
                <p>Counter Value: {counter}</p>
            </div>
            <button onClick={handleInc}>+</button>
            <button onClick={handleRes}>Reset</button>
            <button onClick={handleDec}>-</button>
        </div>
        <div>
            <input type='number' ref={counterValue} />
            <button onClick={handleAdd}>Add </button>
        </div>
        </>
    );
};

export default Counter;
