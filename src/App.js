import "./App.css";
import NavBar from "./components/NavBar";
import NewsFunctional from "./components/NewsFunctional";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const numberOfArticles = 12;
  return (
    <Router>
      <div>
        {" "}
        <NavBar />
        {/* <NewsFunctional pageSize={numberOfArticles} country="in" category="entertainment" /> */}
        <Routes>
          <Route
            path="/"
            element={
              <NewsFunctional
                key="general"
                pageSize={numberOfArticles}
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
                pageSize={numberOfArticles}
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
                pageSize={numberOfArticles}
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
                pageSize={numberOfArticles}
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
                pageSize={numberOfArticles}
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
                pageSize={numberOfArticles}
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
                pageSize={numberOfArticles}
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
                pageSize={numberOfArticles}
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
