import React from 'react';

const Student = (props) => {
    return (
        <div>
        <h4>Student present:{props.present}</h4>
        <button onClick={props.presentHandel}>Student</button>  
        </div>
    );
};

export default Student;