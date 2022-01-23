import React from "react";
import styled from "styled-components";
import { IIntroduction } from "../types/introductionTypes";

interface IProps {
  data?: any;
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 140%;
  border-radius: 10px;
  background-color: tomato;
  margin-bottom: 12px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  overflow: hidden;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  padding-top: 20px;
  background-color: ${(props) => props.theme.colors.gradientGray};
`;

const Box = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  background: ${(props) =>
    `linear-gradient(
        0deg,
        ${props.theme.colors.gradientGray} 0%,
        transparent 100%
      )`};
`;

const RecommendationBox = styled.div`
  width: 90px;
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.25);
`;

const WhiteText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;

const RecommendationText = styled(WhiteText)`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.M};
`;

const Name = styled(WhiteText)`
  margin-top: 12px;
  margin-bottom: 8px;
  font-size: ${(props) => props.theme.fontSize.XXL};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

const Text = styled(WhiteText)`
  font-size: ${(props) => props.theme.fontSize.L};
`;

const Tall = styled(WhiteText)`
  margin-top: 4px;
  font-size: ${(props) => props.theme.fontSize.L};
  opacity: 60%;
`;

const Icon = styled.img``;

const InfoIcon = styled(Icon)`
  width: 16px;
  height: 17px;
  margin-left: 4px;
`;

const FooterIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 44px;
`;

const UnlikeIconContainer = styled(FooterIconContainer)`
  margin-right: 8px;
  background-color: ${(props) => props.theme.colors.darkGray};
  width: 48px;
`;

const LikeIconContainer = styled(FooterIconContainer)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.glamBlue};
`;

const LikeText = styled(WhiteText)`
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize.M};
`;

const MainCard: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <Container>
        <Img src={require("../assets/icon/nav/home.png")} />
        <Box>
          <RecommendationBox>
            <RecommendationText>오늘의 추천</RecommendationText>
          </RecommendationBox>
          <Name>
            이름, 나이
            <InfoIcon src={require("../assets/icon/main/info.png")} />
          </Name>

          {data?.introduction ? (
            <Text>{data?.introduction}</Text>
          ) : (
            <>
              <Text>그래픽 디자이너 ∙ 2.9km</Text>
              <Tall>키 cm</Tall>
            </>
          )}
        </Box>
        <Footer>
          <UnlikeIconContainer>
            <Icon src={require("../assets/icon/main/delete.png")} />
          </UnlikeIconContainer>
          <LikeIconContainer>
            <LikeText>좋아요</LikeText>
          </LikeIconContainer>
        </Footer>
      </Container>
    </>
  );
};

export default MainCard;
