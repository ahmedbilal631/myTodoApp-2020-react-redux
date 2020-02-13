import React, { Component } from 'react';
import AddBox from './components/addBox';
import Header from './components/header';
import TaskList from './components/taskList';

import store from './components/redux/store';
import { Provider } from 'react-redux';

export default class App extends Component {
     
  render() {
    return (
      <Provider store={store}>
        <p>Hello MY</p>
        <Header />
        <AddBox />
        <TaskList />
      </Provider>
    );
  }
}
