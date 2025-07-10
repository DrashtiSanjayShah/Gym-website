 import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
return (
<nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>    <h2>CrossFit</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/join">Join Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);
};

export default Navbar;