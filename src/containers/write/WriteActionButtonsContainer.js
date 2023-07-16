import WriteActionButtons from "../../components/write/WriteActionButtons";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {writePost} from "../../modules/write";

const WriteActionButtonsContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {title, body, tags, post, postError} = useSelector(({write}) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError,
    }));

    const onPublish = () => {
        dispatch(writePost({
                title,
                body,
                tags,
            }),
        );
    };

    const onCancel = () => {
        navigate(-1); // 뒤로 가기
    };

    useEffect(() => {
        if (post) {
            const {_id, user} = post;
            navigate(`/@${user.username}/${_id}`);
        }
        if (postError) {
            console.log(postError);
        }
    }, [navigate, post, postError]);

    return (
        <WriteActionButtons onPublish={onPublish} onCancel={onCancel}/>
    );
};

export default WriteActionButtonsContainer;