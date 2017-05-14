import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
// import ReducerLibrary from './reducer_library';
import ReducerLibrary from './reducer_add_book';

const rootReducer = combineReducers({
    library: ReducerLibrary,
    form: formReducer
});

export default rootReducer;
