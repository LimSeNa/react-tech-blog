import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({post, error, loading}) => {
    // 에러 발생 시
    if (error) {
        if (error.response && error.response.status === 400) {
            return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>
        }
        return <PostViewerBlock>오류 발생!</PostViewerBlock>
    }

    // 로딩 중이거나 아직 포스트 데이터가 없을 때
    if (loading || !post) {
        return null;
    }
    const {title, body, user, publishDate, tags} = post;

    return (
        <PostViewerBlock>
            <PostHead>
                <h1>{title}</h1>
                <SubInfo hasMarginTop="true" username={user.username} publishedDate={publishDate}/>
                <Tags tags={tags}/>
            </PostHead>
            <PostContent dangerouslySetInnerHTM={{__html: body}}/>
        </PostViewerBlock>
    );
};

export default PostViewer;