import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './components/redux/store/index.js'; // Assuming your store is exported from a file named 'store'
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <Provider store={store}>
               <App />
          </Provider>
     </React.StrictMode>
);