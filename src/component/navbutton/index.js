import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';

class Navbutton extends React.Component {

  render() {
    return (
      <div className='navbutton'>
        <button> {this.props.buttonText} </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbutton);
