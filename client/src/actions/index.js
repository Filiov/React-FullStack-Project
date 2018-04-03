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

export function addPost(post) {
    const request = axios.post('/api/news', post)
        .then(response => response.data)

    return {
        type: 'ADD_POST',
        payload: request
    }
}

export function clearNewPost() {
    return {
        type: 'CLEAR_NEWPOST',
        payload: {}
    }
}

export function getUserPosts(userId) {
    const request = axios.get(`/api/user_posts?user=${userId}`)
        .then(response => response.data)

    return {
        type: 'GET_USER_POSTS',
        payload: request
    }
}

export function getPost(id) {
    const request = axios.get(`/api/getNews?id=${id}`)
        .then(response => response.data);

    return {
        type: 'GET_POST',
        payload: request
    }
}

export function updatePost(data) {
    const request = axios.post(`/api/news_update`, data)
        .then(response => response.data);

    return {
        type: 'UPDATE_POST',
        payload: request
    }
}

export function deleteReview(id) {
    const request = axios.delete(`/api/delete_news?id=${id}`)
        .then(response => response.data);

    return {
        type: 'DELETE_POST',
        payload: request
    }
}

export function clearPost() {
    return {
        type: 'CLEAR_POST',
        payload: {
            book: null,
            updatePost: false,
            postDeleted: false
        }
    }
}

export function loginUser({ email, password }) {
    const request = axios.post('/api/login', { email, password })
        .then(response => response.data)

    return {
        type: 'USER_LOGIN',
        payload: request
    }
}

export function auth() {
    const request = axios.get('/api/auth')
        .then(response => response.data);

    return {
        type: 'USER_AUTH',
        payload: request
    }
}