import {combineReducers} from 'redux'
import userReducers from './Reducers'


const reducer = combineReducers({
    data: userReducers
})

export default reducer;