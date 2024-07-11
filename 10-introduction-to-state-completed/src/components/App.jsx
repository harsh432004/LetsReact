import React from "react";

function strike(){
  document.getElementById("root").style.textDecoration = "line-through";
}

function unstrike() {
  document.getElementById("root").style.textDecoration = null;
}
function App() {
  return (
    <div>
    <p>Buy me a Milk</p>
    <button onClick={strike}>Changes to strike</button>
    <button onClick={unstrike}>Changes to unstrike</button>
    </div>
  );
}

export default App;
