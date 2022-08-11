import React from "react"
import { render } from "react-dom";
import Navbar from "../section/Navbar";
import { HashLink as Link } from 'react-router-hash-link';

class NoPage extends React.PureComponent {
    render() {
      return (
        <div>
        <Navbar />
        <div className="col-8" id="noPage">
          <h1 style={{textAlign: "center"}}>404 error: page not found</h1>
          <p>To find what you are looking for, click the buttons bellow:</p>
          <div style={{textAlign: "center"}}>
            <Link to="home"><button id="primarybutton" style={{marginRight: "20px"}}><i className="bi bi-house" style={{paddingRight: "10px"}}></i>Home</button></Link><Link to="contact"><button id="primarybutton"><i className="bi bi-phone" style={{paddingRight: "10px"}}></i>Contact</button></Link>
          </div>
        </div>
        (Footer goes here)
        </div>
      );
    }
}

export default NoPage