import "./App.css";
import NavBar from "./components/NavBar";
import NewsFunctional from "./components/NewsFunctional";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
function App() {
  const api = "8992f49c3c7f4e63ac0dd07a4701674a";
  const numberOfArticles = 6;
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <div>
        {" "}
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        {/* <NewsFunctional  setProgress={setProgress}  pageSize={numberOfArticles} country="in" category="entertainment" /> */}
        <Routes>
          <Route
            path="/"
            element={
              <NewsFunctional
                key="general"
                apiKey={api}
                setProgress={setProgress}
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
                apiKey={api}
                setProgress={setProgress}
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
                apiKey={api}
                setProgress={setProgress}
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
                apiKey={api}
                setProgress={setProgress}
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
                apiKey={api}
                setProgress={setProgress}
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
                apiKey={api}
                setProgress={setProgress}
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
                apiKey={api}
                setProgress={setProgress}
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
                apiKey={api}
                setProgress={setProgress}
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
