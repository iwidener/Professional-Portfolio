import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Home from "./pages/About";
import Footer from "./components/Footer";
// import Jumbotron from "./components/Jumbotron";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        {/* <div>
          <Jumbotron>
            {About}
          </Jumbotron>
        </div> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
