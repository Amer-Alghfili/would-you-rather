import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import authed from './authed';

export default combineReducers({
    users,
    questions,
    authed
}); 
