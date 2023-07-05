import styled from "styled-components";
import palette from "../../lib/styles/palette";
import {Link} from "react-router-dom";

/* 회원가입/로그인 페이지의 레이아웃을 담당한다. */

/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  position: absolute; /* 가장 가까이에 있는 부모 요소를 기준으로 배치 */
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex; /* 내부 내용 중앙 정렬 */
  flex-direction: column; /* 플렉스 컨테이너 내의 아이템을 배치 */
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
    .logo-area{
      display: block; /* 가로 한 줄 모두 차지 */
      padding-bottom: 2rem;
      text-align: center;
      font-weight: bold;
      letter-spacing: 2px;
    }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025); /* 위 0, 오른쪽 왼쪽 0, 아래 8px */
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({children}) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">Blog Practice</Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;