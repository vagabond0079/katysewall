import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import Navbutton from '../navbutton';

class Navbar extends React.Component {

  render() {
    return (
      <div className='navbar'>
        <nav> navbar </nav>
        <Navbutton
          buttonText='Navbutton #1'
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
