import React from 'react';
import activity from '../higherOrder/activity';

//import the hoc function.
//Teacher shift receives hoc function's props

const Teacher = (props) => {
    console.log(props);
    // Teacher receives the props from hoc and app.js file.
    //props from app.js file go to the hoc and comes as props from hoc 
    
    return (
        <div>
           <h3>Teacher present count:{props.present}</h3>
           <h4>Teacher Shift:{props.shift}</h4>
           <h5>Teacher benefit:{props.salary}</h5>
           <button onClick={props.presentHandel}>Teacher</button> 
        </div>
    );
};

//connect the Hoc function to the Teacher component.
export default activity(Teacher);

//teacher can send parameters
//export default activity(Teacher,10);