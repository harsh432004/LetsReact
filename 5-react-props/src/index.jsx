import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";  // Assuming Card component is in a file named Card.js

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Harsh"
        img="Harsh.png"
        phone="+987 654 321"
        email="jack@jack.com"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
