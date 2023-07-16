import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const TagBoxBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;

  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden; /* 넘치는 부분 안보여줌 */
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]}; /* 스타일 초기화 */

  input, button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;

    &:hover {
      background: ${palette.gray[6]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[5]};
  cursor: pointer;

  &:hover {
    opacity: 0.5; /* 불투명도. 요소 뒤쪽 콘텐츠가 숨겨지는 정도 */
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const TagItem = React.memo(({tag, onRemove}) => (
    <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

const TagList = React.memo(({tags, onRemove}) => (
    <TagListBlock>
        {tags.map(tag => (
            <TagItem key={tag} tag={tag} onRemove={onRemove}/>
        ))}
    </TagListBlock>
));

const TagBox = ({onChangeTags, tags}) => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(
        tag => {
            if (!tag) return; // 공백이면 추가하지 않음
            if (localTags.includes(tag)) return; // 이미 존재하면 추가하지 않음
            const nextTags = [...localTags, tag]; // 기존 태그들 + 입력한 태그를 배열로 한 것을 nextTags 변수에 저장
            setLocalTags(nextTags); // localTags를 nextTags로 바꾸고
            onChangeTags(nextTags); // tags: nextTags
        },
        [localTags, onChangeTags],
    );

    const onRemove = useCallback(
        tag => {
            const nextTags = localTags.filter(t => t !== tag); // localTags에서 t !== tag를 만족하는 tag들만 nextTags로 저장
            setLocalTags(nextTags);
            onChangeTags(nextTags);
        },
        [localTags, onChangeTags],
    );

    const onChange = useCallback(
        e => {
            setInput(e.target.value);
        },
        []
    );

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            insertTag(input.trim()); // 앞뒤 공백을 없앤 후 등록
            setInput(''); // input 초기화
        },
        [input, insertTag]
    );

    // tags 값이 바뀔 때
    useEffect(() => {
        setLocalTags(tags);
    }, [tags]);

    return (
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm onSubmit={onSubmit}>
                <input
                    placeholder="태그를 입력하세요."
                    value={input}
                    onChange={onChange}
                />
                <button type="submit">추가</button>
            </TagForm>
            <TagList tags={localTags} onRemove={onRemove}/>
        </TagBoxBlock>
    );
};

export default TagBox;