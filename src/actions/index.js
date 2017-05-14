export const ADD_BOOK = 'ADD_MOOK';

//action creator
export function addBook(e)
{
    //action with type and payload
    return {
        type: ADD_BOOK,
        payload: e.target.value
    };
}
