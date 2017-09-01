import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import Navbutton from '../navbutton';

import * as route from '../../actions/route.js';

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
      <nav className='navbar'>
        <Navbutton
          buttonText='Work'
          handleClick={this.props.goToWork}
        />
        <Navbutton
          buttonText='About'
          handleClick={this.handleClick}
        />
        <Navbutton
          buttonText='Contact'
          handleClick={this.handleClick}
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
