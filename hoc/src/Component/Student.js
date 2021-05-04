import React from 'react';
import activity from '../higherOrder/activity';

//import the hoc function.
//Student shift receives hoc function's props

const Student = (props) => {

    // Teacher receives the props from hoc and app.js file.
    //props from app.js file go to the hoc and comes as props from hoc 
    
    return (
        <div>
           <h3>Student present count:{props.present}</h3>
           <h4>Student Shift:{props.shift}</h4>
           <h5>Student responsibility:{props.fee}</h5>
           <button onClick={props.presentHandel}>Student</button> 
        </div>
    );
};

//connect the Hoc function to the Student component.
export default activity(Student);