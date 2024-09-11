const {createStore, combineReducers, applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

//product constant

const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";


const initialProducts = {
    products: ["sugar", "salt"],
    numberOfProducts: 2,
}

// action
const getProduct = ()=>{
    return {
        type: GET_PRODUCT,
    }
}

const addProduct = (product)=>{
    return {
        type: ADD_PRODUCT,
        peyload: product,
    }
}

// reducer

const productReducer = (state=initialProducts, action)=>{
    switch (action.type) {
        case GET_PRODUCT:
            return{
                ...state 
            }
        case ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.peyload],
                numberOfProducts: state.numberOfProducts + 1,
            }
    
        default:
            return state
    }
}


//store 

const store = createStore(productReducer, applyMiddleware(logger));

// store can work with a ruduce at a time.

// when multiple reducer have then at first, combine them and use
// const combineReducer  = combineReducers({
//     productR: productReducer,
//     cartR: cartReducer,
// }) 

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getProduct());
store.dispatch(addProduct("pen"));