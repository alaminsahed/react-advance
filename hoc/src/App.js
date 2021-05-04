import "./App.css";
import Student from "./Component/Student";
import Teacher from "./Component/Teacher";

//HOC- Higher Order Component
// Hoc is a function that receive a component and returns a new component

//Teacher and Student has a common activity. Go to school everyday

function App() {

  //teacher and student component can't receive the props directly.
  //props directly comes to the hoc function
  return (
    <div>
      <Teacher salary="salary" />
      <Student fee="fee" />
    </div>
  );
}

export default App;
