import styled, {css} from "styled-components";
import palette from "../../lib/styles/palette";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem; /* 위 아래 0.25rem, 오른쪽 왼쪽 1rem */
  color: white;
  outline: none; /* border 바깥 외곽선 */
  cursor: pointer; /* 요소 위에 마우스 커서가 올라갔을 때 보여줄 모양 */
  background: ${palette.gray[8]};

  &:hover { /* 현재 요소에 마우스가 올라갔을 때 */
    background: ${palette.gray[6]};
  }

  ${props => props.fullWidth && css` /* fullWidth 값이 true일 때 특정 스타일 부여 */
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
  `}

  ${props => props.cyan && css`
    background: ${palette.cyan[5]};

    &:hover {
      background: ${palette.cyan[4]};
    }
  `}
`;

const Button = props => {
    return (
        <StyledButton {...props}/>
    );
};

export default Button;