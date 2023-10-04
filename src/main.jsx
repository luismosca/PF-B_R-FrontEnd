import { createRoot, ReactDOM } from 'react-dom/client';
import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{
        'client-id':
          'ATL7EtyZ3IFMlIzfcKCCnCrdfKtyhzq8Os4mFW5qihB6_bJTqPzsAVYb6o0l0nnXnIT-Lgu2Nn-N9mor',
      }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PayPalScriptProvider>
  </React.StrictMode>
);

//*----------------------------------------------------
//* original
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
