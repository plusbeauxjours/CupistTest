import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

interface IProps {}
interface IMatched {
  isMatched?: boolean;
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  font-size: 14px;
  padding: 12px 12px 12px 8px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
`;

const Items = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li<IMatched>`
  margin: 0 10px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 44px;
  font-size: ${(props) => props.theme.fontSize.XL};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  color: ${(props) => props.theme.colors.gray2};
  border-bottom: ${(props) =>
    props.isMatched ? `3px solid ${props.theme.colors.black}` : "transparent"};
`;

const ProfileIconContainer = styled(Item)`
  margin: 0;
`;

const Icon = styled.img``;

const Header: React.FC<IProps> = () => {
  const mainMatch = useRouteMatch("/");
  return (
    <Nav>
      <Col>
        <Items>
          <Link to="/">
            <Item isMatched={mainMatch?.isExact}>
              <Icon src={require("../assets/icon/main/logo.png")} />
            </Item>
          </Link>
          <Item>근처</Item>
          <Item>라이브</Item>
        </Items>
      </Col>
      <Col>
        <Link to="/profile">
          <ProfileIconContainer>
            <Icon src={require("../assets/icon/main/setting.png")} />
          </ProfileIconContainer>
        </Link>
      </Col>
    </Nav>
  );
};

export default Header;
