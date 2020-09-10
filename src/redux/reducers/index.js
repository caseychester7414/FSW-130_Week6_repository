import {combineReducers} from 'redux'
import movieReducer from './movieReducer'
import tvReducer from './tvReducer'


const reducers = combineReducers({
    movie: movieReducer,
    show: tvReducer
})

export default reducers
