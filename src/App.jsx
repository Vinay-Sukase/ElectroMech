import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
