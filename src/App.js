import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Authenticated from './Authenticated';
import './App.css';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Authenticated />
      </Provider>
    </Router>
  );
};

export default App;
