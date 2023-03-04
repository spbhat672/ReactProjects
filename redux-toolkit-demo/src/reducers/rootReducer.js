import { combineReducers } from 'redux';
import {cartReducer, userReducer} from "./cartAndUserReducer";
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
    carts: cartReducer,
    users: userReducer,
    locations: locationReducer,
});

export default rootReducer;