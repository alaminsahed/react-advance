import React, { createContext, useReducer } from "react";
import Counter2 from "./Counter2";

export const CounterContext = createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

const CounterMain = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>{count}</h1>
      <CounterContext.Provider value={{countDispatch:dispatch}}>
        <Counter2 />
      </CounterContext.Provider>
    </div>
  );
};

export default CounterMain;
