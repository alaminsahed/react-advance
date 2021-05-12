import Sector from "./Component/Sector";
import "./App.css";
import Teacher from "./Component/Teacher";
import Activity from "./Component/Activity";
import { createContext, useState } from "react";
import Profit from "./Component/Profit";

export const themeContext = createContext();

function App() {
  //context api
  //state management process in react
  // tree part of context api ; createContext, provider, consumer
  // useContext hook is used

  const [theme, setTheme] = useState("dark");


  return (
    <div>
      <Activity>{
        (present,presentHandel)=>(
          <Teacher present={present} presentHandel={presentHandel}/>
        )
      }</Activity>
      {
        //set the provider
        // put the value
        // destructor theme in the value
      }
      <themeContext.Provider value={{theme}}>
      <Profit/>
      </themeContext.Provider>
    </div>
  );
}

export default App;
