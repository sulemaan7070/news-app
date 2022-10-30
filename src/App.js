import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingCard from "./components/LoadingCard";

export default class App extends Component {
  render() {
    return (
      <div>
        <LoadingCard />
        <NavBar />
        <News />
      </div>
    );
  }
}
