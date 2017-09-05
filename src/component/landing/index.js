import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import './landing.scss';

import Navbar from '../navbar/';

class Landing extends React.Component {

  render() {
    return (
      <section className='landing'>
        <Navbar />
        <div className='name-block'>
          <h1> Katy Sewall </h1>
        </div>
        <div className='title-block'>
          <h4> Podcast Consultant </h4>
          <h4> Radio Producer </h4>
          <h4> Freelance Writer </h4>
          <h4> Host and Moderator </h4>
        </div>
      </section>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
