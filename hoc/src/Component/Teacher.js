import React from 'react';
import activity from '../higherOrder/activity';

//import the hoc function.
//Teacher shift receives hoc function's props

const Teacher = (props) => {
    
    return (
        <div>
           <h3>Teacher present count:{props.present}</h3>
           <h4>Teacher Shift:{props.shift}</h4>
           <button onClick={props.presentHandel}>Teacher</button> 
        </div>
    );
};

//connect the Hoc function to the Teacher component.
export default activity(Teacher);