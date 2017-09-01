import React from 'react';
import {connect} from 'react-redux';
import {history} from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from '../landing';
import Work from '../work';
// import About from '../about';
// import Contact from '../contact';

class App extends React.Component{

  componentDidMount(){
    history.push(this.props.route);
  }

  render(){
    return(
      <div className='app'>
        <BrowserRouter basename='/'>
          <Switch location={{ pathname: this.props.route }}>
            <Route exact path='/' component={Landing}></Route>
            <Route exact path='/work' component={Work}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  route: state.route,
});

let mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// <Route exact path='/about' component={About}></Route>
// <Route exact path='/contact' component={Contact}></Route>
