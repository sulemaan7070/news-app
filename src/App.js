import "./App.css";

import NavBar from "./components/NavBar";

import NewsFunctional from "./components/NewsFunctional";

import React from "react";

function App() {
  return (
    <div>
      {" "}
      <NavBar />
      <NewsFunctional pageSize={5} />
    </div>
  );
}

export default App;
