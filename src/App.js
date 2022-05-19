import React from "react";
import "./App.css";
import TodoList from "./components/Depenses";
import Utilisateurs from "./components/Utilisateurs";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/depenses" element={<TodoList />} />
        <Route path="/utilisateurs" element={<Utilisateurs />} />
        <Route path="*" element={<Utilisateurs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
