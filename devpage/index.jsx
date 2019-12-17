import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/style.css';

const initalState = {
  now: 'ROOT',
  unexists: [{ query: 'asd', id: '123' }, { query: 'eqw', id: '456' }, { query: 'gjhh', id: '789' }],
  rootedi: {
    fetchSearch: false,
    fetchSubmit: false,
    root: {
      name: [],
      belong: [],
      mean: '',
      detail: '',
    },
  },
  wordedi: {
    fetchSearch: false,
    fetchSubmit: false,
    word: {
      name: '',
      prop: '',
      mean: '',
      combine: '',
      detail: '',
      part: [],
    },
  },
  allbelong: [],
  allpart: [],
};
const store = createStore(rootReducer, initalState, applyMiddleware(
  thunkMiddleware, // 允许我们 dispatch() 函数
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
