import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import Navbutton from '../navbutton';

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    console.log('handleClick');
  }

  render() {
    return (
      <div className='navbar'>
        <nav> navbar </nav>
        <Navbutton
          buttonText='Navbutton #1'
          handleClick={this.handleClick}
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
