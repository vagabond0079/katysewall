import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import * as route from '../../actions/route.js';
import './work.scss';

import Navbar from '../navbar';
import Navbutton from '../navbutton';

class Work extends React.Component {
  constructor(props){
    super(props);

    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  handleHomeClick(event){
    let el = document.getElementById('landing');
    el.scrollIntoView(true);
  }

  render() {
    return (
      <section id='work-page'>
        <div id='work-page-buffer-top'></div>
        <h1> Podcast Host & Consultant </h1>
        <hr/>
        <p> Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. </p>
        <h1> Freelance Writer </h1>
        <hr/>
        <p> Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. </p>
        <h1> Radio Producer </h1>
        <hr/>
        <p> Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. </p>
        <h1> Host & Moderator </h1>
        <hr/>
        <p> Celery potato scallion desert raisin horseradish spinach carrot soko.  </p>
        <Navbutton
          buttonText='Top'
          handleClick={this.handleHomeClick}
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
)(Work);
