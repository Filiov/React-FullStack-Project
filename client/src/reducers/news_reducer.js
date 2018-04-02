export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_NEWS':
            return { ...state, list: action.payload }
        case 'GET_POST_W_REVIEWER':
            return {
                ...state,
                post: action.payload.post,
                reviewer: action.payload.reviewer
            }
        case 'CLEAR_POST_W_REVIEWER':
            return {
                ...state,
                post: action.payload.post,
                reviewer: action.payload.reviewer
            }
        case 'ADD_POST':
            return { ...state, newpost: action.payload }
        case 'CLEAR_NEWPOST':
            return { ...state, newpost: action.payload }
        default:
            return state;
    }
}