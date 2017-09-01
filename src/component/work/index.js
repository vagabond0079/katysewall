import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';

class Work extends React.Component {

  render() {
    return (
      <section className='work-page'>
        <h2> Podcast Host & Consultant </h2>
        <hr/>
        <p> Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. </p>
        <h2> Freelance Writer </h2>
        <hr/>
        <p> Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. </p>
        <h2> Radio Producer </h2>
        <hr/>
        <p> Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. </p>
        <h2> Host & Moderator </h2>
        <hr/>
        <p> Celery potato scallion desert raisin horseradish spinach carrot soko.  </p>
      </section>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
