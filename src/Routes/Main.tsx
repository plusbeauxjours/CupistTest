import { callApi } from "data/api";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IIntroduction } from "../types/introductionTypes";
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
  const [isIntroductionCustomDataVisible, setIsIntroductionCustomDataVisible] =
    useState<boolean>(false);
  const [introductionData, setIntroductionData] = useState<IIntroduction[]>([]);
  const [introductionCustomData, setIntroductionCustomData] = useState<
    IIntroduction[]
  >([]);
  const [introductionAdditionalData, setIntroductionAdditionalData] = useState<
    IIntroduction[]
  >([]);
  const [introductionAdditional2Data, setIntroductionAdditional2Data] =
    useState<IIntroduction[]>([]);

  const getData = async () => {
    const { data: _introductionData } = await callApi("introduction");
    const { data: _introductionCustomData } = await callApi(
      "introduction_custom"
    );
    const { data: _introductionAdditionalData } = await callApi(
      "introduction_additional"
    );
    const { data: _introductionAdditional2Data } = await callApi(
      "introduction_additional_2"
    );
    console.log(_introductionAdditional2Data);
    setIntroductionData(_introductionData.data);
    setIntroductionCustomData(_introductionCustomData.data);
    setIntroductionAdditionalData(_introductionAdditionalData.data);
    setIntroductionAdditional2Data(_introductionAdditional2Data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      {introductionData?.map((item) => (
        <MainCard key={item.id} data={item} today />
      ))}
      {isIntroductionCustomDataVisible &&
        introductionCustomData?.map((item) => (
          <MainCard key={item.id} data={item} today />
        ))}
      {introductionAdditionalData?.map((item) => (
        <MainCard key={item.id} data={item} />
      ))}
      {introductionAdditional2Data?.map((item) => (
        <MainCard key={item.id} data={item} />
      ))}
      <CustomIntroductionBox />
    </Wrapper>
  );
};

export default Main;
