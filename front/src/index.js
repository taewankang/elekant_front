import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
