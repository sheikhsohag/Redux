const { createStore } = require("redux")


//Constant 


const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_NUMBER = "INCREMENT_BY_NUMBER"





const counter = {
    counter: 0
};

const incrementCounter = ()=>{
    return {
        type: INCREMENT
    }
}
const incrementBYNumberCounter = (value)=>{
    return {
        type: INCREMENT_BY_NUMBER,
        peyload: value,
    }
}
const decrementCounter = ()=>{
    return {
        type: DECREMENT
    }
}
const resetCounter = ()=>{
    return {
        type: RESET
    }
}



// Reducer..

const counterReducer = (state=counter, action)=>{
     switch(action.type){
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case RESET:
            return {
                ...state, 
                counter: 0
            }
        case INCREMENT_BY_NUMBER:
            return {
                ...state, 
                counter: state.counter + action.peyload
            }
        default:
            return state
     }
}


// store 


const store = createStore(counterReducer);


store.subscribe(()=>{
   console.log(store.getState());
})


store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementBYNumberCounter(10))