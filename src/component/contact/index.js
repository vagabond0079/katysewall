import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import * as route from '../../actions/route.js';

import Navbutton from '../navbutton';

class Contact extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.props.goToHome();
  }

  render() {
    return (
      <section className='contact-page'>
        <h1> Want to Hire Me? </h1>
        <p> katy@katysewall.com </p>
        <p> 206.457.7205 </p>
        <Navbutton
          buttonText='Home'
          handleClick={this.handleClick}
        />
      </section>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(route.switchRoute('/')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
