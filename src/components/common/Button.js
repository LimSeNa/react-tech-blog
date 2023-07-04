import styled from "styled-components";
import palette from "../../lib/styles/palette";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem; // 위 아래 0.25rem, 오른쪽 왼쪽 1rem
  color: white;
  outline: none; // border 바깥 외곽선
  cursor: pointer; // 요소 위에 마우스 커서가 올라갔을 때 보여줄 모양

  background: ${palette.gray[8]};
  &:hover { // 현재 요소에 마우스가 올라갔을 때
    background: ${palette.gray[6]};
  }
`;

const Button = props => {
    return (
        <StyledButton {...props}/>
    );
};

export default Button;