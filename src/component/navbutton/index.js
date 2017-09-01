import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';

class Navbutton extends React.Component {

  render() {
    return (
      <button
        className='navbutton'
        onClick={this.props.handleClick}
      > {this.props.buttonText} </button>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbutton);
