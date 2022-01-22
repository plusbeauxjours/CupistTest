import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: black;
  font-size: 14px;
  padding: 20px;
  color: white;
`;

const Item = styled.li`
  margin: 0 10px;
  color: ${(props) => props.theme.glamBlue};
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function BottomNavigator() {
  return (
    <Nav>
      <Item>
        <Link to="/">ICON</Link>
      </Item>
      <Item>
        <Link to="/">ICON</Link>
      </Item>
      <Item>
        <Link to="/">ICON</Link>
      </Item>
      <Item>
        <Link to="/">ICON</Link>
      </Item>
      <Item>
        <Link to="/">ICON</Link>
      </Item>
    </Nav>
  );
}

export default BottomNavigator;
