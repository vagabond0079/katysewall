import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import appStoreCreate from '../../lib/app-store-create.js';
import Landing from '../landing';

const store = appStoreCreate();

class App extends React.Component{
  render(){
    return(
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <main>
              <h1>It works.</h1>
              <Route exact path='/' component={Landing}></Route>
            </main>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
