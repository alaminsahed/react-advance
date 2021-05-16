import React, {  useState } from 'react';

const Activity = (props) => {
    const [present, setPresent] = useState(0);
    // console.log(props)

    const presentHandel=()=>{
        setPresent(present+1);
    }

    const {children}= props;
    return (
        <div>
            {
                children(present,presentHandel)
            }
        </div>
    );
};

export default Activity;