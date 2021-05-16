import React, { useContext } from 'react';
import { themeContext } from '../App';

const Student = (props) => {
    console.log(props)
    // also use useContext hook instead of <Consumer> rendering
    //const themeConsumer = useContext(themeContext);
    
    return (
        <div>
            <h4>{props.theme}</h4>
            <h4>{props.theme}</h4>
            <h5>Student present:{props.present}</h5>
            <button onClick={props.presentHandel}>Student</button>
        </div>
    );
};

export default Student;