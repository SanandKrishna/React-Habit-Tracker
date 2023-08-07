import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Week from "./Week";

const App = () => {
  
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/week" element={<Week/>}/>
    </Routes>
    </>
  );
};

export default App;