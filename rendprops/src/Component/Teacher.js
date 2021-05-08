import React from 'react';

const Teacher = (props) => {
   
    return (
        <div>
        <h4>Teacher present:{props.present}</h4>
           <button onClick={props.presentHandel}>Teacher</button> 
        </div>
    );
};

export default Teacher;