import React, { useReducer, useState } from "react";

// const initialState = 0;

const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  // console.log(state,action);

  // switch (action.type) {
  //     case 'increment':
  //         return state + 1;
  //     case 'decrement':
  //         return state-1;

  //     default:
  //         return state;
  // }

  switch (action.type) {
    case 'increment':
      return {counter: state.counter + action.value}
    case "decrement":
      return {counter: state.counter - action.value}

    default:
      return state;
  }
};

const Counter = () => {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.counter}</h1>

      {/* state management using useState */}
      {/* <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button> */}

      {/* using only action type */}
      {/* <button onClick={()=>dispatch({type:"increment"})}>+</button>
            <button onClick={()=>dispatch({type: "decrement"})}>-</button> */}
      
      {/* Action type and pass dynamic value */}
      <button onClick={() => dispatch({ type: "increment", value: 3 })}>+</button>
      <button onClick={() => dispatch({ type: "decrement", value:3 })}>-</button>
    </div>
  );
};

export default Counter;
