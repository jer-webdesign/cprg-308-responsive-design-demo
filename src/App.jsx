// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import About from "./About";
import Contact from "./Contact";
import SignIn from "./SignIn";
import Cart from "./Cart";
import "./App.css";

import homeIcon from './assets/home.png';
import booksIcon from './assets/books.png';
import aboutIcon from './assets/about.png';
import contactIcon from './assets/contact.png';
import signinIcon from './assets/signin.png';
import cartIcon from './assets/cart.png';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="header-content">
            <div
              className={`hamburger-menu ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
            </div>

            <h1 className="title">VisBook</h1>

            <nav className="desktop-nav">
              <ul>
                <li><Link to="/" className="icon-link" title="Home"><img src={homeIcon} alt="Home" className="nav-icon" /></Link></li>
                <li><Link to="/books" className="icon-link" title="Books"><img src={booksIcon} alt="Books" className="nav-icon" /></Link></li>
                <li><Link to="/about" className="icon-link" title="About"><img src={aboutIcon} alt="About" className="nav-icon" /></Link></li>
                <li><Link to="/contact" className="icon-link" title="Contact"><img src={contactIcon} alt="Contact" className="nav-icon" /></Link></li>
                <li><Link to="/signin" className="icon-link" title="Sign In"><img src={signinIcon} alt="Sign In" className="nav-icon" /></Link></li>
                <li><Link to="/cart" className="icon-link" title="Cart"><img src={cartIcon} alt="Cart" className="nav-icon" /></Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
          <nav className="mobile-nav">
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)} className="full-link" title="Home">Home</Link></li>
              <li><Link to="/books" onClick={() => setMenuOpen(false)} className="full-link" title="Books">Books</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)} className="full-link" title="About">About</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="full-link" title="Contact">Contact</Link></li>
              <li><Link to="/signin" onClick={() => setMenuOpen(false)} className="full-link" title="Sign In">Sign In</Link></li>
              <li><Link to="/cart" onClick={() => setMenuOpen(false)} className="full-link" title="Cart">Cart</Link></li>
            </ul>
          </nav>
        </div>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <footer className="footer">© 2025 Responsive Site</footer>
      </div>
    </Router>
  );
}
