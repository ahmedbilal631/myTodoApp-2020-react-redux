import React, { Component } from 'react';

import {Provider} from 'react-redux';
import store from './redux/store';

import AddNow from './components/addNow';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AddNow />
      </Provider>
        );
  }
}

export default App;