import Pagination from "../../components/posts/Pagination";
import {useParams, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const PaginationContainer = () => {
    const [searchParams] = useSearchParams();
    const {username} = useParams();
    const tag = searchParams.get('tag');
    const page = parseInt(searchParams.get('page'), 10) || 1; // page가 없으면 1을 기본값으로 사용, 문자열을 10진수의 정수로 반환

    const {lastPage, posts, loading} = useSelector(({posts, loading}) => ({
        lastPage: posts.lastPage,
        posts: posts.posts,
        loading: loading['posts/LIST_POSTS'],
    }));

    // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여 주지 않음
    if (!posts || loading) return null;

    return (
        <Pagination tag={tag} page={parseInt(page, 10)} username={username} lastPage={lastPage}/>
    );
};

export default PaginationContainer;