import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Board from './components/board';
import { observe } from './components/game';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const rootElement = document.querySelector('.container');

observe(rookPosition =>
  ReactDOM.render(
      <Board rookPosition={rookPosition} />
    , rootElement
  )
);
