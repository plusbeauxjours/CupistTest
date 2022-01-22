import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: white;
  font-size: 14px;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const Item = styled.li`
  width: 28px;
  height: 28px;
  margin: 0 10px;
  color: ${(props) => props.theme.colors.glamBlue};
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Icon = styled.img``;

function BottomNavigator() {
  return (
    <Footer>
      <Row>
        <Item>
          <Icon src={require("../assets/icon/nav/home.png")} />
        </Item>
        <Item>
          <Icon src={require("../assets/icon/nav/live.png")} />
        </Item>
        <Item>
          <Icon src={require("../assets/icon/nav/station.png")} />
        </Item>
        <Item>
          <Icon src={require("../assets/icon/nav/connection.png")} />
        </Item>
        <Item>
          <Icon src={require("../assets/icon/nav/more.png")} />
        </Item>
      </Row>
    </Footer>
  );
}

export default BottomNavigator;
