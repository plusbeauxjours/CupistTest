import React from "react";
import styled from "styled-components";

import MainCard from "../components/MainCard";
import CustomIntroductionBox from "../components/MainCustomIntroductionBox";

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
      <MainCard data={null} />
      {/* <MainCard data={null} />
      <MainCard data={null} /> */}
      <CustomIntroductionBox />
      {/* <MainCard data={null} />
      <MainCard data={null} />
      <MainCard data={null} /> */}
    </Wrapper>
  );
};

export default Main;
