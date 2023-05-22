import React from "react";
import './App.css';
import Navbar from "./components/common/navbar";
import Hero from "./components/common/hero";
import MiddleWrapper from "./components/common/middlewrapper";
import Footer from "./components/common/footer";
import BottomContainer from "./components/common/bottomcontainer";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <MiddleWrapper/>
      <BottomContainer/>
      <Footer/>
    </div>
  )
}

export default App;
