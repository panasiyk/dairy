import {combineReducers} from 'redux';
import ItemsReducer from './ItemsReducer'
import CommentsReducer from './CommentsReducer'

const RootReducer = combineReducers({
    ItemsReducer,
    CommentsReducer
});
export default RootReducer;