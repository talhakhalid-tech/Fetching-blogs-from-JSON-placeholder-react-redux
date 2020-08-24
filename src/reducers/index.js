import {combineReducers} from 'redux'
import BlogsReducer from './BlogsReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    blogs: BlogsReducer,
    users: UserReducer
})