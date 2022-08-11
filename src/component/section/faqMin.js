// https://onaircode.com/react-js-accordions-examples/

import React from "react";
import { ReactDOM } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import '../style/accordian.scss';

class AccordionApp extends React.Component {
    render() {
        const hiddenTexts = [{
            label: 'How to contact me',
            value: 'You can contact me by'
        },
        {
            label: 'How my pricing works',
            value: 'Text of Accordion 2'
        }];
        return (
            <div>
                <Accordion hiddenTexts={hiddenTexts} />
            </div>
        );
    }
}

class Accordion extends React.Component {
    render() {
        return (
            <div>
            <div className="row" id="accordion">
            <div className="col-8" id="accordianSection">
                <div className="accordion">
                    <h3>frequently asked questions (FAQ's)</h3>
                    {this.props.hiddenTexts.map((hiddenText) => <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />)}                    
                </div>
            </div>
            </div>
            <p id="anyOther">Any other questions <Link to="#contact" id="viewmore">contact me here</Link>.</p>
            </div>
        );
    }
}

class AccordionItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            }
        })
    }
    render() {
        const activeStatus = this.state.visibility ? 'active' : ''

        return (
            <div>
                <button className="accordion__button" onClick={this.handleToggleVisibility}>{this.props.hiddenText.label}<span className={this.state.visibility? 'bi bi-dash-lg': 'bi bi-plus-lg'}></span></button>
               <hr></hr>
               <p className={`accordion__content ${activeStatus}`}>
                {
                    this.props.hiddenText.value
                }
                </p>
                
            </div>
        );
    }
}

export default AccordionApp;