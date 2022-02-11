import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux';
import {store} from './app/store';
import { BrowserRouter } from "react-router-dom";
import { fetchProducts,fetchCards } from './features/actions';

store.dispatch(fetchCards())
store.dispatch(fetchProducts())
ReactDOM.render(
  <> 
    <Provider store={store}>

    <App />

    </Provider>
  </>,
  document.getElementById('root')
)
