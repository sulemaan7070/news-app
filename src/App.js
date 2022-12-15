import "./App.css";
import NavBar from "./components/NavBar";
import NewsFunctional from "./components/NewsFunctional";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {" "}
        <NavBar />
        {/* <NewsFunctional pageSize={5} country="in" category="entertainment" /> */}
        <Routes>
          <Route
            path="/"
            element={
              <NewsFunctional
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <NewsFunctional
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <NewsFunctional
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <NewsFunctional
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <NewsFunctional
                key="health"
                pageSize={5}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <NewsFunctional
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <NewsFunctional
                key="sports"
                pageSize={5}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <NewsFunctional
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
