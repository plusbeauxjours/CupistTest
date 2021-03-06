import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface IProps {
  removedItems: number[];
  setIsIntroductionCustomDataVisible: (
    isIntroductionCustomDataVisible: boolean
  ) => void;
}

const Container = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  border: ${(props) => `1px ${props.theme.colors.gray1} solid`};
  padding: 16px;
  padding-top: 24px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 62px;
`;

const Btn = styled.button`
  display: flex;
  background-color: ${(props) => props.theme.colors.glamBlue};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 32px;
`;

const Title = styled.p`
  font-size: ${(props) => props.theme.fontSize.XL};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  margin-bottom: 12px;
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.M};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

const BtnText = styled(Text)`
  color: ${(props) => props.theme.colors.white};
`;

const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const Img = styled.img``;
const TypeIcon = styled(Img)`
  margin-right: 12px;
`;
const HotIcon = styled(Img)`
  margin-left: 5px;
  margin-bottom: 3px;
`;

const BtnContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 44px;
  margin-top: 16px;
`;

const BarBtn = styled(BtnContainer)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray1};
`;

const BarBtnText = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize.M};
`;

const MainCustomIntroductionBox: React.FC<IProps> = ({
  removedItems,
  setIsIntroductionCustomDataVisible,
}) => {
  const customArr = [
    {
      text: "?????? ??????",
      image: require("../assets/icon/recommendations/today.png"),
      isHot: true,
    },
    {
      text: "????????? ??????",
      image: require("../assets/icon/recommendations/dia.png"),
      isHot: true,
    },
    {
      text: "????????? ?????? ??????",
      image: require("../assets/icon/recommendations/glamour.png"),
      isHot: true,
    },
    {
      text: "?????? ????????? ?????????",
      image: require("../assets/icon/recommendations/withpet.png"),
      isHot: false,
    },
  ];

  return (
    <Container layoutId={removedItems[0] + ""}>
      <Title>?????? ??????</Title>
      {customArr.map((custom, index) => (
        <Row key={index}>
          <Col>
            <TypeIcon src={custom.image} />
            <Text>{custom.text}</Text>
            {custom.isHot && (
              <HotIcon
                src={require("../assets/icon/recommendations/hot.png")}
              />
            )}
          </Col>
          <Btn onClick={() => setIsIntroductionCustomDataVisible(true)}>
            <BtnText>??????</BtnText>
          </Btn>
        </Row>
      ))}
      <BarBtn onClick={() => console.log("24??? ?????? ?????? ??????")}>
        <BarBtnText>24??? ?????? ?????? ??????</BarBtnText>
      </BarBtn>
    </Container>
  );
};

export default MainCustomIntroductionBox;
