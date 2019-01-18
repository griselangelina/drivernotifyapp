import {createStore,combineReducers,compose, applyMiddleware} from 'redux';
import counterReducer from './redux/Counter/reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});


const store = createStore(
    rootReducer,
    )

export default store;