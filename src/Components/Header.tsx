import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: black;
  font-size: 14px;
  padding: 20px;
  color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin: 0 10px;
  color: ${(props) => props.theme.glamBlue};
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function Header() {
  return (
    <Nav>
      <Col>
        <Items>
          <Item>
            <Link to="/">GLAM</Link>
          </Item>
          <Item>
            <Link to="/">근처</Link>
          </Item>
          <Item>
            <Link to="/">라이브</Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Item>
          <Link to="/profile">PROFILE</Link>
        </Item>
      </Col>
    </Nav>
  );
}

export default Header;
