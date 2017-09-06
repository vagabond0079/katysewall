import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import * as route from '../../actions/route.js';
import './contact.scss';

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
          <p> 206.457.7205 </p>
        </div>
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
