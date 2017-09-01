import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import * as route from '../../actions/route.js';
import katyProfilePic from '../../assets/katy-profile-pic.jpg';

import Navbar from '../navbar';
import Navbutton from '../navbutton';

class About extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.props.goToHome();
  }

  render() {
    return (
      <section className='about-page'>
        <Navbar />
        <h1> About Katy </h1>
        <img src={katyProfilePic}/>
        <p>
          Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jÃ­cama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.
        </p>
        <p>
          Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.
        </p>
        <p>
          Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic. JÃ­cama garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush tomato.
        </p>
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
)(About);
