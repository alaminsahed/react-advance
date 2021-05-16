import React from "react";
import Activity from "./Activity";
import Student from "./Student";
import {themeContext} from "../App";

const section = () => {
  // console.log(props);
  // const {present,presentHandel}=props;
  return (
    <div>
      <Activity>
        {(present, presentHandel) => (
          <themeContext.Consumer>
          {
              //consumer always receive a function
              //value is the parameter of this function
          }
          {
              ({theme})=>(
                <Student present={present} presentHandel={presentHandel} theme={theme}/>
              )
          }
            
          </themeContext.Consumer>
        )}
      </Activity>
    </div>
  );
};

export default section;
