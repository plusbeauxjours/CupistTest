import { useCallback } from "react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IIntroductionData } from "types/introductionTypes";
import MainCard from "components/MainCard";
import CustomIntroductionBox from "components/MainCustomIntroductionBox";
import { callApi } from "data/api";
import Loading from "components/Loading";

interface IProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;
  widht: 100%;
  padding: 0 5px;
`;

const IconContainer = styled.div`
  flex: 1;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  top: 80px;
  padding-bottom: 200px;
  justify-content: center;
  align-items: center;
`;

const Main: React.FC<IProps> = () => {
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchMoreLoading, setFetchMoreLoading] = useState<boolean>(false);
  const [isIntroductionCustomDataVisible, setIsIntroductionCustomDataVisible] =
    useState<boolean>(false);
  const [introductionData, setIntroductionData] =
    useState<IIntroductionData>(null);
  const [introductionCustomData, setIntroductionCustomData] =
    useState<IIntroductionData>(null);
  const [introductionAdditionalData, setIntroductionAdditionalData] =
    useState<IIntroductionData>(null);
  const [introductionAdditional2Data, setIntroductionAdditional2Data] =
    useState<IIntroductionData>(null);

  const getData = async () => {
    try {
      setLoading(true);
      const { data: _introductionData } = await callApi("introduction");
      const { data: _introductionCustomData } = await callApi(
        "introduction_custom"
      );
      const { data: _introductionAdditionalData } = await callApi(
        "introduction_additional"
      );
      setIntroductionData(_introductionData);
      setIntroductionCustomData(_introductionCustomData);
      setIntroductionAdditionalData(_introductionAdditionalData);
      setHasNext(Boolean(_introductionAdditionalData.meta.next));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchMore = async () => {
    try {
      setFetchMoreLoading(true);
      const { data: _introductionAdditional2Data } = await callApi(
        "introduction_additional_2"
      );
      if (_introductionAdditional2Data) {
        setIntroductionAdditional2Data(_introductionAdditional2Data);
        setHasNext(Boolean(_introductionAdditional2Data.meta.next));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setFetchMoreLoading(false);
    }
  };

  const onscroll = useCallback(() => {
    if (
      window.pageYOffset + window.innerHeight ===
        document.documentElement.scrollHeight &&
      hasNext &&
      !fetchMoreLoading
    ) {
      fetchMore();
    }
  }, [hasNext]);

  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, [hasNext]);

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <IconContainer>
        <Loading />
      </IconContainer>
    );
  } else {
    return (
      <Wrapper>
        {introductionData?.data.map((item) => (
          <MainCard key={item.id} data={item} today />
        ))}
        {isIntroductionCustomDataVisible &&
          introductionCustomData?.data.map((item) => (
            <MainCard key={item.id} data={item} today />
          ))}
        {introductionAdditionalData?.data.map((item) => (
          <MainCard key={item.id} data={item} />
        ))}
        <CustomIntroductionBox
          setIsIntroductionCustomDataVisible={
            setIsIntroductionCustomDataVisible
          }
        />
        {introductionAdditional2Data?.data.map((item) => (
          <MainCard key={item.id} data={item} />
        ))}
      </Wrapper>
    );
  }
};

export default Main;
