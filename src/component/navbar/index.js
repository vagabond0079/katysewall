import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import Navbutton from '../navbutton';
import './navbar.scss';

import * as route from '../../actions/route.js';

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.handleWorkClick = this.handleWorkClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  handleWorkClick(event){
    console.log('handleClick');
    let el = document.getElementById('work-page');
    el.scrollIntoView(true);
  }

  handleAboutClick(event){
    console.log('handleClick');
    let el = document.getElementById('about-page');
    el.scrollIntoView(true);
  }

  handleContactClick(event){
    console.log('handleClick');
    let el = document.getElementById('contact-page');
    el.scrollIntoView(true);
  }

  render() {
    return (
      <nav className='navbar'>
        <Navbutton
          buttonText='Work'
          handleClick={this.handleWorkClick}
        />
        <Navbutton
          buttonText='About'
          handleClick={this.handleAboutClick}
        />
        <Navbutton
          buttonText='Contact'
          handleClick={this.handleContactClick}
        />
      </nav>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  goToWork: () => dispatch(route.switchRoute('/work')),
  goToAbout: () => dispatch(route.switchRoute('/about')),
  goToContact: () => dispatch(route.switchRoute('/contact')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
