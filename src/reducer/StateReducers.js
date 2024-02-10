import allSlice from './Slices/authSlice';
import {combineReducers} from "redux"

const rootReducer=combineReducers({
    auth:allSlice
})
export default rootReducer