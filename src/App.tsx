import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Header } from "./components/Header";
import { Game } from "./pages/Game";
import { Quiz } from "./pages/Quiz";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/game/quiz" element={<Quiz />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
