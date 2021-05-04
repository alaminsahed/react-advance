import React, { useState } from "react";

//Teacher and student comes in same shift.
//activity is HOC function. Member receives the old components.
//NewMember is the functional component and returns to the HOC function
//Member is the new component that all other component can access.
//All components receive shift props to import hoc function and connect the function to the component.

//Teacher and Student components are used same state.
// present form state and button logic presentHandel sends as props.
//Note: Two components used this state independently.

const activity = (Member) => {
  const NewMember = () => {
    const [present, setPresent] = useState(0);

    const presentHandel = () => {
      setPresent(present + 1);
    };

    return (
      <Member present={present} presentHandel={presentHandel} shift="morning" />
    );
  };
  return NewMember;
};

export default activity;
