import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

interface IProps {}
interface IMatched {
  isMatched?: boolean;
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  font-size: 14px;
  padding: 12px 12px 12px 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.p`
  z-index: -1;
  position: absolute;
  text-align: center;
  width: 100%;
  max-width: 600px;
  font-size: ${(props) => props.theme.fontSize.HeaderTitle};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

const Icon = styled.img``;

const ProfileHeader: React.FC<IProps> = () => {
  return (
    <Nav>
      <Row>
        <Link to="/">
          <Icon src={require("../assets/icon/profile_edit/back.png")} />
        </Link>
        <Title>프로필 수정</Title>
      </Row>
    </Nav>
  );
};

export default ProfileHeader;
