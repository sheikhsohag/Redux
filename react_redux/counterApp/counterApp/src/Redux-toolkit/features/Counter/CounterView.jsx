import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

export default function CounterView() {
    const dispatch = useDispatch();

    const count = useSelector((state)=>state.counter.count);
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>decrement</button>
      <button onClick={()=>{dispatch(reset())}}>reset</button>
      <button onClick={()=>{dispatch(incrementByAmount(5))}}>IncrementByfive</button>
    </div>
  )
}
 