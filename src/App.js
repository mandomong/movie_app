import React from "react";

// component with props
function Food({fav}){
    return (
        <h2>I like {fav}</h2>
    )
}

function App() {
  return (
      <div>
        <h1>Hello</h1>
          <Food fav="kimchi" />
          <Food fav="remen" />
          <Food fav="chukumi" />
      </div>
  );
}

export default App;
