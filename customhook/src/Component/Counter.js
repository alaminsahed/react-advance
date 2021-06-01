import React from 'react';
import useCustom from './Custom';

const Counter = () => {
    // declare custom hook
    // this hook can use any file and it works like individual
    const data = useCustom();
    // console.log(data)
    return (
        <div>
            <h1>Counter</h1>
            <h2>{data.count}</h2>
            <button onClick={data.incrementHandler}>Increment</button>
        </div>
    );
};

export default Counter;