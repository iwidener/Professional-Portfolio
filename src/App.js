import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Home from "./pages/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/Professional-Portfolio/" component={Home} />
        <Route exact path="/Professional-Portfolio/about" component={About} />
        <Route exact path="/Professional-Portfolio/portfolio" component={Portfolio} />
        <Route exact path="/Professional-Portfolio/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
