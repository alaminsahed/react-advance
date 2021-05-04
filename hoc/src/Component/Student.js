import React from 'react';
import activity from '../higherOrder/activity';

//import the hoc function.
//Student shift receives hoc function's props

const Student = (props) => {
    
    return (
        <div>
           <h3>Student present count:{props.present}</h3>
           <h4>Student Shift:{props.shift}</h4>
           <button onClick={props.presentHandel}>Teacher</button> 
        </div>
    );
};

//connect the Hoc function to the Student component.
export default activity(Student);