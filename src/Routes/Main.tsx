import React from "react";
import styled from "styled-components";

import Card from "../components/Card";
import CustomIntroductionBox from "../components/CustomIntroductionBox";

interface IProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;
  widht: 100%;
  padding: 0 5px;
`;

const Main: React.FC<IProps> = () => {
  return (
    <Wrapper>
      <Card data={null} />
      {/* <Card data={null} />
      <Card data={null} /> */}
      <CustomIntroductionBox />
      {/* <Card data={null} />
      <Card data={null} />
      <Card data={null} /> */}
    </Wrapper>
  );
};

export default Main;
