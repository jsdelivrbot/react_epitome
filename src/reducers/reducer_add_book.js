import {ADD_BOOK} from '../actions/index';

//state is only the state this reducer is responsible for. not an application state
export default function (state = [], action) {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, {title: action.payload}];
            break;
        default:
            return state;
    }
}
