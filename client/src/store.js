import { createStore, combineReducers,applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzaReducer} from './reducers/pizzaReducer'

const finalReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
   
});
const initialState ={};
const middleware =[thunk];

const store = createStore(finalReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;