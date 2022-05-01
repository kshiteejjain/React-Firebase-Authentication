import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Nav from "./Components/Nav";
import PageNotfound from "./Components/Page-Not-Found";
import { useState } from "react";
function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/Login' element={  <Login />} />
          <Route exact path='/Register' element={  <Register />} />
          <Route exact path='*' element={<PageNotfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
