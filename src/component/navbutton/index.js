import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import './navbutton.scss';


class Navbutton extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <button
        className='navbutton'
        onClick={this.props.handleClick}
      > {this.props.buttonText} </button>
    );
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
});

let mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbutton);
