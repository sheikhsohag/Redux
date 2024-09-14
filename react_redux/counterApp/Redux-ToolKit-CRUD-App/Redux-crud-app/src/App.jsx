import React from 'react'
import Index from './routes/Index'
import './css/index.css'
import {Provider} from 'react-redux';
import store from './App/store';

export default function App() {
  return (
    <Provider store={store}>
        <Index/>
    </Provider>
  )
}
