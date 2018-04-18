import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import {createStore} from 'redux';
import rootReducer from './store/RootReducer';

// react-md utilizes Google's material icons
import WebFont from 'webfontloader';
WebFont.load({ google: { families: ['Material Icons', 'Open Sans'] } });

registerServiceWorker();

const store = createStore(rootReducer);

  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
  );
  
