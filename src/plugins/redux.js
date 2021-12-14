import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
// import state from '../store/state'
// import reducer from '../store/reducer'
import detailRec from '../store/reducer/detailRec'
import home from '../store/reducer/home'
import rec from '../store/reducer/rec'

let rootReducer = combineReducers({detailRec,home,rec})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export default store