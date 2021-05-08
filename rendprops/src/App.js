import './App.css';
import Teacher from './Component/Teacher';
import Activity from './Component/Activity';
import Student from './Component/Student';
//Render Props
//Render Props is the props that defines render logic
//Render Prop is a function that receives render logic from outsider component 
// solve the same problem like HOC.

function App() {
  return (
    <div>
     {
       //Activity component has common logic for student and teacher component
       //render is prop as function
       //render props receives parameters from Activity components and 
       //those props again sends to the Teacher component for action
    }
      {
      //   <Activity render={(present,presentHandel)=>(
      //   <Teacher present={present} presentHandel={presentHandel}/>
      // )}/>
    }

    <Activity> 
    {
      (present,presentHandel)=>(
          <Teacher present={present} presentHandel={presentHandel}/>
        )
    }
    </Activity>
    <Activity> 
    {
      (present,presentHandel)=>(
          <Student present={present} presentHandel={presentHandel}/>
        )
    }
    </Activity>

    </div>
  );
}

export default App;
