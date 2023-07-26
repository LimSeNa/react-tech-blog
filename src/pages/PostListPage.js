import PostListContainer from "../containers/posts/PostListContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";

const PostListPage = () => {
    return (
        <div>
            <PostListContainer/>
            <PaginationContainer/>
        </div>
    );
};

export default PostListPage;