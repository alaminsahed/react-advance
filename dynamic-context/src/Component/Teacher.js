import React from "react";

const Teacher = (props) => {
  // console.log(props)
  return (
    <div>
      <h5>Teacher present:{props.present}</h5>
      <button onClick={props.presentHandel}>Teacher</button>
    </div>
  );
};

export default Teacher;
