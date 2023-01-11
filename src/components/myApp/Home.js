import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Index from "./Index";


const Home = () => {
    return (
        <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path='/index' element={<Index />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cards' element={<div><h1>cards Page</h1></div>}/>
      </Routes>
      </BrowserRouter> 
    )
}

export default Home