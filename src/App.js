import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";

// import LoadingCard from "./components/LoadingCard";
// import LoadingScreen from "./components/LoadingScreen";
import NewsFunctional from "./components/NewsFunctional";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <NewsFunctional />
      </div>
    );
  }
}
