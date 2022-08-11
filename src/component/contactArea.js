import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './style/sass.scss';
import './style/contactStyle.scss';

class contactplace extends React.PureComponent {
  render() {
    return (
      <div id="contact">
      <div className="row">
      <div className='col-6' id="whiteBorder">
      <h3>Contact Me</h3>
      <hr></hr>
      <form>
        <p><span>* Are required feilds.</span></p>

        <label for="name">Name <span>*</span></label>
        <input placeholder='Name *' name="name" required aria-required="true" autocomplete="name"></input><br></br>

        <label for="email">Email <span>*</span></label>
        <input placeholder='Email *' name="email" required aria-required="true" autoComplete="email"></input><br></br>
        
        <label for="projectInfo">Project Info <span>*</span></label>
        <textarea placeholder='Project Info *' name="projectInfo" required aria-required="true" rows={4}></textarea><br></br>
      
        <button type="submit"><i class="bi bi-send"></i>Submit</button>
      </form>
      </div>

      <div className='col-6'>
        <p>Ring me, send me a Whatsapp or send an email or finally you could fill out the form to get in touch.</p>
        {/* <a href='mailto:jameswhitby813@gmail.com' tabindex="-1"><button id="socialbuttons">
          <i class="bi bi-envelope"></i>
          Email Me
        </button></a>martinbuildingservices@gmail.com<br></br><br></br>
        <a href='tel:07400255548' tabindex="-1"><button id="socialbuttons">
          <i class="bi bi-phone"></i>
          Call Me
        </button></a>07400255548<br></br><br></br>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=447544861154" tabindex="-1"><button id="socialbuttons">
        <i class="bi bi-whatsapp"></i>
          Whatsapp Me
        </button></a>07400255548 */}

        <table>

        <tr>
            <th>
              <a href='tel:07400255548' tabindex="-1"><button id="socialbuttons">
              <i class="bi bi-phone"></i>
              Call Me
              </button></a>
            </th>
            <td>
              07400255548
            </td>
          </tr>

          <tr>
            <th>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=447544861154" tabindex="-1"><button id="socialbuttons">
              <i class="bi bi-whatsapp"></i>
              Whatsapp Me
              </button></a>
            </th>
            <td>
              07400255548
            </td>
          </tr>

          <tr>
            <th>
              <a href='mailto:jameswhitby813@gmail.com' tabindex="-1"><button id="socialbuttons">
              <i class="bi bi-envelope"></i>
              Email Me
              </button></a>
            </th>
            <td>
              martinbuildingservices@gmail.com
            </td>
          </tr>
          
        </table>

       
      
      </div>

      </div></div>
    );
  }
}

export default contactplace;