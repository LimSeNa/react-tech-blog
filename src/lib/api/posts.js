import client from "./client";

export const writePost = ({title, body, tags}) =>
    client.post('/api/posts', {title, body, tags});

export const readPost = id => client.get(`/api/posts/${id}`);

export const listPosts = ({username, page, tag}) => {
    return client.get(`/api/posts/`, {
        params: {username, page, tag},
    });
};