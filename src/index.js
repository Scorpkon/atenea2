import React from 'react';
import ReactDOM from 'react-dom/client';
import store from'./store/store'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain='dev-s6o4m30i853tmvtc.us.auth0.com'
        clientId='ZkLz9nAEsf9oNeUDoOdIcl4bk12Tq4d5'
        redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>

);


reportWebVitals();
