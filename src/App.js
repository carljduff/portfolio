import NavBar from "./components/NavBar";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Portfolio from "./components/Portfolio";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import { BlogProvider } from "./components/BlogContext";
import About from "./components/About";

function App() {
  return (
    <BlogProvider>

   
     <BrowserRouter>
    <NavBar/>
     <Routes>

     <Route path="/portfolio" element={<Home />} />
     <Route path="/portfolio/projects" element={<Portfolio/>} />
     <Route path="/portfolio/blog" element={<BlogList/>} />
     <Route path="/portfolio/blog/:blogID" element={<Blog/>} />
     <Route path="/portfolio/about" element={<About/>} />
     </Routes>
     
     </BrowserRouter>
     </BlogProvider>
  );
}

export default App;
