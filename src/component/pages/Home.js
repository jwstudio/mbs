import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../style/sass.scss';
import Navbar from '../section/Navbar';
import AccordionApp from '../section/faqMin';
import Contact from '../section/contactSection';
import BlogPreviewItem2 from './blogPreviewItem2';
import ContentfulUtil from '../../utils/ContentfulUtil'

class Home extends React.PureComponent {
  state = {
    posts: []
  }

  componentDidMount() {
    ContentfulUtil.fetchProjectByPathName().then(this.setPosts);
  }

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render() {
    return (
      <>
      
      <Navbar></Navbar>

      <div id="header">
        <div className="row">

          <div className="col-6">
            <h1>Martin Building Services</h1>
            <p>Domestic Building Services in and around the <b>Newton Abbot</b> area. I work across all areas of building, from roofing to repairing garden patio pointing. using expertise gained by working in building for more than 30 years.</p>
            <Link to="projects" tabindex="-1"><button id="primarybutton">Contact Me</button></Link>
            <br></br><br></br><br></br>
          </div>

          <div className="col-6">
           <img src="heroimage.jpg" alt="Martin Building Services Logo"></img>
          </div>

        </div>

      </div>

      <div id="tagline">
        <h3>30+ years of working in building</h3>
      </div>


      {/* <div id="projects">

      <div className="row" id="carddesc">
      <h3>Some of my <Link to="projects"><span>recent work!</span></Link></h3>  
            <p>I have spent the last 3 decades working in the construction industry on a range of different projects. ranging from little to big projects.</p>
           
          <div className="col-5" id="">
          <p style={{color: "black"}}><b>My projects are available here:</b></p>
            <i id="rightarrow" class="bi bi-arrow-right"></i>
            <i id="rightarrow" class="bi bi-arrow-right"></i>
            <i id="rightarrow" class="bi bi-arrow-right"></i><br></br>
          </div>

          <div className="col-7" id="projectbuttonsection">
          <div id="iconsection">
            <span id="smallsmall"><i id="yarrow" class="bi bi-arrow-down"></i></span>
            <i id="yarrow" class="bi bi-arrow-down"></i>
            <i id="yarrow" class="bi bi-arrow-down"></i>
          </div>
          <h3>View my projects:</h3>
          <Link to="projects" tabindex="-1"><button id="primarybutton">My Projects</button></Link>
          <div id="iconsection">
            <span id="smallsmall"><i id="yarrow" class="bi bi-arrow-up"></i></span>
            <span id="smallsmallhide"><i id="yarrow" class="bi bi-arrow-up"></i></span>
            <span id="smallsmallhide"><i id="yarrow" class="bi bi-arrow-up"></i></span>
          </div>

          </div>
      </div>
      </div> */}

<div id="projects">

<div className="row" id="carddesc">
<div className='col-8'>
<h3>Take a look at <Link to="projects">my <span>work!</span></Link></h3>  
  <p>I have spent the last 3 decades working in the building industry on a range of different projects, ranging from small to big projects. <br></br><br></br>I work exclusively domestically, giving every customer high quality, at an affordable price. My services range from being insulted by Fred, drinking tea, finding chocolate coins, and destroying brooms.</p> 
</div>
    <div className="col-4" id="projectbuttonsection">
    <div style={{marginBottom: "30px"}}>
      <i id="yarrow" class="bi bi-arrow-down"></i>
      <i id="yarrow" class="bi bi-arrow-down"></i>
    </div>
    <Link to="projects" tabindex="-1"><button id="primarybutton">My Projects</button></Link>
  
    </div>
</div>
</div>

      <AccordionApp></AccordionApp>

      <Contact></Contact>

      </>
      
    );
  }
}

export default Home;