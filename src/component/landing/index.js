import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import Navbar from '../navbar/';

class Landing extends React.Component {

  render() {
    return (
      <div className='landing'>
        <Navbar />
        <div className='name-block'>
          <h1> Katy Sewall </h1>
        </div>
        <div className='title-block'>
          <h2> Podcast Consultant </h2>
          <h2> Radio Producer </h2>
          <h2> Freelance Writer </h2>
          <h2> Host and Moderator </h2>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
