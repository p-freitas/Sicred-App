import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
