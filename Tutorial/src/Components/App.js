import React from "react";
import ReactDOM from "react-dom";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  //inline styles
  const styles = {
    fontSize: 200,
    backgroundColor: "#66ccff"
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#G4756F";
  } else if (hours < 18) {
    timeOfDay = "afternoon";
    styles.color = "#2E0927";
  } else {
    timeOfDay = "evening";
    styles.color = "#D90000";
  }

  return (
    <div>
      <h1 style={styles}>Good {timeOfDay} Sir</h1>
    </div>
  );
}

export default App;
