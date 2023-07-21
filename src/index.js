import React from 'react';
import ReactDOM from 'react-dom/client';
import store from'./store/store'
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import conf_auth from './conf_auth';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider {...conf_auth }>
        <BrowserRouter>
        <App />
        </BrowserRouter>
        
      </Auth0Provider>
    </Provider>
  </React.StrictMode>

);



