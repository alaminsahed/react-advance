import { useState } from 'react';

//just like a js function
//start with use

const useCustom = () => {

    const [count, setCount] = useState(0);

    const incrementHandler = ()=>{
        setCount(count+1);
    }
    return {
        count,
        incrementHandler
    };
};

export default useCustom;