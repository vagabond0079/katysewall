import React from 'react';
import {connect} from 'react-redux';
import {history} from 'react-router-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Landing from '../landing';
import Work from '../work';
import About from '../about';
import Contact from '../contact';

class App extends React.Component{

  render(){
    return(
      <div className='app'>
        <HashRouter basename='/'>
          <Switch location={{ pathname: this.props.route }}>
            <Route exact path='/' component={Landing}></Route>
            <Route path='/work' component={Work}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  route: state.route,
});

let mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
