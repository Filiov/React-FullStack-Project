import { combineReducers } from 'redux';
import news from './news_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
    news,
    user
});

export default rootReducer;