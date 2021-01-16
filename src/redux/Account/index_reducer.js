import { combineReducers } from 'redux';
import accountReducer from '../Account/account_reducer';
import accountsReducer from '../Account/accounts_reducer';


export default combineReducers({
    accountReducer,
    accountsReducer,
})