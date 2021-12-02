import {createStore} from 'redux'
import state from '../store/state'
import reducer from '../store/reducer'

let store = createStore(reducer,state)

export default store