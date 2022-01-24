import React, { useMemo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { getImage } from "data/api";

interface IProps {
  item?: any;
  today?: boolean;
  onLiked: (id: number) => void;
  onUnLiked: (id: number) => void;
}

const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: 56.26%;
  max-width: 600px;
  border-radius: 10px;
  margin-bottom: 12px;
  overflow: hidden;
  aspect-ratio: 10 / 14;
`;

const Img = styled.img`
  z-index: -10;
  position: absolute;
  padding-top: calc(100% / 10 * 14)
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 600px;
  object-fit: cover;
`;

const Footer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  flex-direction: row;
  padding: 16px;
  padding-top: 20px;
  background-color: ${(props) => props.theme.colors.gradientGray};
`;

const Box = styled.div`
  bottom: 80px;
  width: 100%;
  max-width: 600px;
  position: absolute;
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

const card = {
  initial: { scale: 1, opacity: 0, x: 0 },
  animate: { scale: 1, opacity: 1, x: 0 },
  exit: { scale: 1.1, opacity: 0, x: window.innerWidth },
};

const MainCard: React.FC<IProps> = ({ item, today, onLiked, onUnLiked }) => {
  return (
    <Container
      variants={card}
      layoutId={item.id + ""}
      initial="initial"
      animate="animate"
      exit={"exit"}
    >
      <Box>
        {today && (
          <RecommendationBox>
            <RecommendationText>오늘의 추천</RecommendationText>
          </RecommendationBox>
        )}
        <Name>
          {item.name}, {item.age}
          <InfoIcon src={require("../assets/icon/main/info.png")} />
        </Name>

        {item?.introduction ? (
          <Text>{item?.introduction}</Text>
        ) : (
          <>
            <Text>
              {item.job} ∙ {item.distance * 0.001}km
            </Text>
            <Tall>{item.height} cm</Tall>
          </>
        )}
      </Box>
      <Footer>
        <UnlikeIconContainer onClick={() => onUnLiked(item.id)}>
          <Icon src={require("../assets/icon/main/delete.png")} />
        </UnlikeIconContainer>
        <LikeIconContainer onClick={() => onLiked(item.id)}>
          <LikeText>좋아요</LikeText>
        </LikeIconContainer>
      </Footer>
      <Img src={getImage(item.pictures[0])} />
    </Container>
  );
};

export default MainCard;
