import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import './landing.scss';

import Navbar from '../navbar/';
import Work from '../work/';
import About from '../about/';
import Contact from '../contact/';

class Landing extends React.Component {

  render() {
    return (
      <main>
        <section id='landing'>
          <Navbar />
          <div id='name-block-buffer-top'></div>
          <div id='name-block'>
            <h1> Katy Sewall </h1>
          </div>
          <div id='title-block'>
            <h4> Podcast Consultant </h4>
            <h4> Radio Producer </h4>
            <h4> Freelance Writer </h4>
            <h4> Host and Moderator </h4>
          </div>
        </section>
        <Work />
        <About />
        <Contact />
      </main>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
