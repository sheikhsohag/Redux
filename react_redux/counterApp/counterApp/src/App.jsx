import React from 'react';

import Todos from './FetchData/components/Todos';
import store from './FetchData/Store/store';
import {Provider} from 'react-redux'

export default function App() {
  return (
    <div>
      <Provider store={store}>
          <Todos/>
      </Provider>
     
    </div>
  );
}



//step1: install package 
// step2: constants define
//step3: async action creator
//step4: reducerr
//store create
//provide
//use store
// adding css


// npm install redux react-redux asios redux thunk


// Provider
