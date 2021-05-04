import React, { useState } from "react";

//Teacher and student comes in same shift.
//activity is HOC function. Member receives the old components.
//NewMember is the functional component and returns to the HOC function
//Member is the new component that all other component can access.
//All components receive shift props to import hoc function and connect the function to the component.

//Teacher and Student components are used same state.
// present form state and button logic presentHandel sends as props.
//Note: Two components used this state independently.

//In functional component 'props' is used when other components send props to the teacher and student.
//teacher and student component can't receive the props directly.
//props directly comes to the hoc function 

//count doesn't need if no one passed any parameters.

const activity = (Member,count) => {
  const NewMember = (props) => {
    const [present, setPresent] = useState(0);

    const presentHandel = () => {
        setPresent(present + 1);
    //if any component sends paramter, then activity receive this.(for teacher adds 10)
    //In teacher component it adds 10 because 10 as count passed from teacher component
    //   setPresent(present + count);
    };
    // console.log(props);
    //destructor all collected props and sending as props to other component. 
    return (
      <Member present={present} presentHandel={presentHandel} shift="morning" {...props}/>
      
    );
    
  };
  return NewMember;
};

export default activity;
