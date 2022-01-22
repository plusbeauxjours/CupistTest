import React from "react";
import styled from "styled-components";
import { IIntroduction } from "../types/introductionTypes";

interface IProps {
  data?: IIntroduction;
}

const Container = styled.div`
  widht: 100vw;
  height: 140vw;
  border-radius: 5px;
  background-color: tomato;
  margin: 0 2px 12px 2px;
`;

const Img = styled.img`
  width: 100%;
  overflow: hidden;
`;

const Box = styled.div`
  position: relative;
  bottom: 0;
  padding: 0 10px;
  background-color: red;
`;

const RecommendationBox = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.25);
`;

const WhiteText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;

const RecommendationText = styled(WhiteText)`
  font-size: ${(props) => props.theme.fontSize.M};
`;

const Name = styled(WhiteText)`
  margin: 15px 0;
  font-size: ${(props) => props.theme.fontSize.XXL};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

const Text = styled(WhiteText)`
margin-bottom: 10px
  font-size: ${(props) => props.theme.fontSize.L};
`;

const Tall = styled(WhiteText)`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSize.L};
  opacity: 60%;
`;

const Icon = styled.img``;

const Card: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <Img src={require("../assets/icon/nav/home.png")} />
      <Box>
        <RecommendationBox>
          <RecommendationText>오늘의 추천</RecommendationText>
        </RecommendationBox>
        <Name>
          이름, 나이
          <Icon src={require("../assets/icon/main/info.png")} />{" "}
        </Name>
        {data.introduction ? (
          <Text>{data.introduction}</Text>
        ) : (
          <>
            <Text>그래픽 디자이너 ∙ 2.9km</Text>
            <Tall>키 cm</Tall>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Card;
