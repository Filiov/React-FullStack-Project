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
        default:
            return state;
    }
}