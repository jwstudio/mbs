import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../style/fullnavbar.scss';
import '../style/sass.scss';

class Menu extends React.PureComponent {
  render() {
    return (
      <div id="background">
      
        <div id="fullnavbar">
          <div id="items">
            <div id="title"><Link to="home"><img style={{width: "104px", height: "44px",}} src="logoCrop.png" alt="Martin Building Services Logo"></img></Link></div><br></br>
            <div id="links"><Link to="menu">Projects</Link></div><br></br>
            <div id="links"><a>FAQ's</a></div><br></br>
            <div id="links"><a>Contact</a></div><br></br>
          </div>
        </div>

      </div>
      
    );
  }
}

export default Menu;