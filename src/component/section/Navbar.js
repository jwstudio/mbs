import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../style/sass.scss';

class Navbar extends React.PureComponent {
  render() {
    return (
      <>
        <div id="navbar">
          <ul>
            <li id="title"><Link to="home"><img style={{width: "64px", height: "24px",}} src="logoCrop.png" alt="Martin Building Services Logo"></img></Link></li>
            <span id="right"><li id="links"><Link to="#contact"><i class="bi bi-phone"></i>Contact</Link></li></span>
            <span id="right"><li id="links"><Link to="#accordion"><i class="bi bi-question-circle"></i>FAQ's</Link></li></span>
            <span id="right"><li id="links"><Link to="projects"><i class="bi bi-card-text"></i>Projects</Link></li></span>
            <span id="right"><li id="navtoggle"><Link to="menu"><i class="bi bi-list"></i></Link></li></span>
          </ul>
        </div>

      </>
      
    );
  }
}

export default Navbar;