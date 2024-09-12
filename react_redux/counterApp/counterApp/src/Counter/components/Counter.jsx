import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, reset } from '../services/action/counterAction';

export default function Counter() {

const count = useSelector((state)=>state.count);    //use selector take state.

const dispatch = useDispatch();

const handleIncrement = ()=>{
     dispatch(incrementCounter())
}

const handleDecrement = ()=>{
    dispatch(decrementCounter())
}
const handleReset = ()=>{
    dispatch(reset())
}


  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
