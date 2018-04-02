import axios from 'axios';

export function getNews(limit = 10, start = 0, order = 'asc', list = '') {
    const request = axios.get(`/api/allNews?limit=${limit}&skip=${start}&order=${order}`)
        .then(response => {
            if (list) {
                return [...list, ...response.data]
            } else {
                return response.data
            }
        })

    return {
        type: 'GET_NEWS',
        payload: request
    }
}

export function getPostWithReviewer(id) {
    const request = axios.get(`/api/getNews?id=${id}`)

    return (dispatch) => {
        request.then(({ data }) => {
            let post = data;

            axios.get(`/api/getReviewer?id=${post.ownerId}`)
                .then(({ data }) => {

                    let response = {
                        post,
                        reviewer: data
                    }

                    dispatch({
                        type: 'GET_POST_W_REVIEWER',
                        payload: response
                    })
                })
        })
    }
}

export function clearPostWithReviewer() {
    return {
        type: 'CLEAR_POST_W_REVIEWER',
        payload: {
            post: {},
            reviewer: {}
        }
    }
}