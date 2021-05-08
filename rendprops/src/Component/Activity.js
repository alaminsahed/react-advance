import React, { useState } from "react";

const Activity = (props) => {
  const [present, setPresent] = useState(0);

  const presentHandel = () => {
    setPresent(present + 1);
  };
  //receives render function as props
  //const {render} = props;

  //call all children in activity component
  const { children } = props;

  return (
    // call render function with parameters (app.js)
    // these parameters are used for children components (app.js)
    <div>
      {
        // render(present,presentHandel)
      }
      {
          children(present,presentHandel)
      }
    </div>
  );
};

export default Activity;
