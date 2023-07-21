import PostViewer from "../../components/post/PostViewer";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {readPost, unloadPost} from "../../modules/post";
import {useParams} from "react-router-dom";

const PostViewerContainer = () => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    const params = useParams();
    const dispatch = useDispatch();
    const {post, error, loading} = useSelector(({post, loading}) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST'],
    }));

    const postId = params.id;

    useEffect(() => {
        dispatch(readPost(postId));

        // 언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);

    return (
        <PostViewer post={post} error={error} loading={loading}/>
    );
};

export default PostViewerContainer;