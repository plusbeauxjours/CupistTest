import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import BottomNavigator from "../components/BottomNavigator";
import Card from "../components/Card";

interface IProps {}

const Container = styled.div``;

const Main: React.FC<IProps> = () => {
  return (
    <>
      <Header />
      <Container>
        <Card data={null} />
        <Card data={null} />
        <Card data={null} />
        <Card data={null} />
        <Card data={null} />
        <Card data={null} />
      </Container>
      <BottomNavigator />
    </>
  );
};

export default Main;
