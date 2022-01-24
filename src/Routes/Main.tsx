import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

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
  const [removedItems, setRemovedItems] = useState<number[]>([]);

  const getData = async () => {
    try {
      setLoading(true);
      const { data: _introductionData } = await callApi("introduction");
      setIntroductionData(_introductionData);
      const { data: _introductionCustomData } = await callApi(
        "introduction_custom"
      );
      setIntroductionCustomData(_introductionCustomData);
      const { data: _introductionAdditionalData } = await callApi(
        "introduction_additional"
      );
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

  const onScroll = useCallback(() => {
    if (
      window.pageYOffset + window.innerHeight ===
        document.documentElement.scrollHeight &&
      hasNext &&
      !fetchMoreLoading
    ) {
      fetchMore();
    }
  }, [hasNext]);

  const onLiked = (id: number) => {
    console.log("onLiked");
    setRemovedItems((prev) => [id, ...prev]);
  };

  const onUnLiked = (id: number) => {
    console.log("onUnLiked");
    setRemovedItems((prev) => [id, ...prev]);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        <AnimatePresence>
          {introductionData?.data
            .filter((i) => !removedItems.includes(i.id))
            .map((item) => (
              <MainCard
                key={item.id}
                item={item}
                onLiked={onLiked}
                onUnLiked={onUnLiked}
                today
              />
            ))}
          {isIntroductionCustomDataVisible &&
            introductionCustomData?.data
              .filter((i) => !removedItems.includes(i.id))
              .map((item) => (
                <MainCard
                  key={item.id}
                  item={item}
                  onLiked={onLiked}
                  onUnLiked={onUnLiked}
                  today
                />
              ))}
          {introductionAdditionalData?.data
            .filter((i) => !removedItems.includes(i.id))
            .map((item) => (
              <MainCard
                key={item.id}
                item={item}
                onLiked={onLiked}
                onUnLiked={onUnLiked}
              />
            ))}
          <CustomIntroductionBox
            removedItems={removedItems}
            setIsIntroductionCustomDataVisible={
              setIsIntroductionCustomDataVisible
            }
          />
          {introductionAdditional2Data?.data
            .filter((i) => !removedItems.includes(i.id))
            .map((item) => (
              <MainCard
                key={item.id}
                item={item}
                onLiked={onLiked}
                onUnLiked={onUnLiked}
              />
            ))}
        </AnimatePresence>
      </Wrapper>
    );
  }
};

export default Main;
