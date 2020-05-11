import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Home from "./pages/About";
//import About from "./pages/About";
//import Portfolio from "./pages/Portfolio";
//import Contact from "./pages/Contact";

//import Footer from "./components/Footer";
//import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="About" component={About} />
        <Route exact path="Portfolio" component={Portfolio} />
        <Route exact path="Contact" component={Contact} />
        {/* <Jumbotron /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
