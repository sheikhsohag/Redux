import React from 'react'
import store from './App/store'
import { Provider } from 'react-redux'
import CounterView from './features/Counter/CounterView'



export default function Apps() {
  return (
    <div>
      <Provider store={store}>
        <CounterView/>
      </Provider>
    </div>
  )
}
