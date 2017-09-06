import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import * as route from '../../actions/route.js';
import './contact.scss';
import PRXlogo from '../../assets/PRXlogo.png';

import Navbar from '../navbar';
import Navbutton from '../navbutton';

class Contact extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section id='contact-page'>
        <div id='contact-page-buffer-top'></div>
        <h1> Want to Hire Me? </h1>
        <div id='contact-info-block'>
          <p> katy@katysewall.com </p>
        </div>
        <ul className="soc">
          <li className='prx-logo'>
            <a href='https://www.prx.org/users/25002-gapesto'>
              <img className='socicon-prx' src={PRXlogo}></img>
            </a>
          </li>
          <li>
            <a href='https://soundcloud.com/katysewall'>
              <i className="socicon-soundcloud" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href='https://facebook.com/katysewall'>
              <i className="socicon-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/KatySewall'>
              <i className="socicon-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li className='socicon-hidden' >
            <a href='https://instagram.com/katysewall'>
              <i className="socicon-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li className='socicon-hidden' >
            <a href='https://linkedin.com/katysewall'>
              <i className="socicon-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(route.switchRoute('/')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
