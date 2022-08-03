import NavBar from "./components/NavBar";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
     {/* <NavBar/> */}
     <BrowserRouter>
    <NavBar/>
     <Routes>

     <Route path="home" element={<Home/>} />
     <Route path="portfolio" element={<Portfolio/>} />
     </Routes>
     
     </BrowserRouter>
   {/* <Home/> */}
    </div>
  );
}

export default App;
