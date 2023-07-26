import PostList from "../../components/posts/PostList";
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {listPosts} from "../../modules/posts";

const PostListContainer = () => {
    const {username} = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const {posts, error, loading, user} = useSelector(({posts, loading, user}) => ({
        posts: posts.posts,
        error: posts.error,
        loading: loading['posts/LIST_POSTS'],
        user: user.user,
    }));

    useEffect(() => {
        const tag = searchParams.get('tag');
        const page = parseInt(searchParams.get('page'), 10) || 1; // page가 없으면 1을 기본값으로 사용, 문자열을 10진수의 정수로 반환
        dispatch(listPosts({username, page, tag}));
    }, [dispatch, searchParams, username]);

    return (
        <PostList loading={loading} error={error} post={posts} showWriteButton={user}/>
    );
};

export default PostListContainer;