import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import Navbar from '../navbar/';

class Landing extends React.Component {

  render() {
    return (
      <div className='landing'>
        <h2> landing </h2>
        <Navbar />
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
