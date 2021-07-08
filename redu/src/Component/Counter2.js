import React, { useContext } from "react";
import {CounterContext} from "./CounterMain";


const Counter2 = () => {
    const counterContext = useContext(CounterContext);
  
  return (
    <div>
      
      <button onClick={() => counterContext.countDispatch({type:'increment'})}>+</button>
      <button onClick={() => counterContext.countDispatch({type:'increment'})}>-</button>
    </div>
  );
};

export default Counter2;
