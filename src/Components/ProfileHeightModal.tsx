import React from "react";
import styled from "styled-components";

interface IProps {
  data: number[];
  isModalOpen: boolean;
  setHeightModalOpen: (isModalOpen: boolean) => void;
  height: number;
  setHeight: (height: number) => void;
}

interface IIsSelected {
  isSelected?: boolean;
}
interface ITheme {
  isModalOpen: boolean;
}

const ModalWrapper = styled.div<ITheme>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline: 0;
  z-index: 1000;
  overflow: auto;
  display: ${(props) => (props.isModalOpen ? "block" : "none")};
`;

const ModalOverlay = styled.div<ITheme>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: ${(props) => (props.isModalOpen ? "flex" : "none")};
  background-color: ${(props) => props.theme.colors.modalOverlayColor};
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  height: 412px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => `0 0 6px 0 ${props.theme.colors.modalOverlayColor}`};
  overflow: auto;
`;

const ModalHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p<IIsSelected>`
  font-size: ${(props) => props.theme.fontSize.L};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  color: ${(props) =>
    props.isSelected ? props.theme.colors.glamBlue : props.theme.colors.black};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  padding-left: 20px;
  background-color: ${(props) => props.theme.colors.white};
`;

const ProfileHeightModal: React.FC<IProps> = ({
  data,
  isModalOpen,
  setHeightModalOpen,
  height,
  setHeight,
}) => (
  <>
    <ModalOverlay isModalOpen={isModalOpen} />
    <ModalWrapper
      isModalOpen={isModalOpen}
      onClick={() => setHeightModalOpen(false)}
    >
      <ModalInner>
        <ModalHeader>
          <Text>키</Text>
        </ModalHeader>
        {data?.map((item, index) => (
          <Row
            key={index}
            onClick={() => {
              setHeightModalOpen(false);
              setHeight(+item);
            }}
          >
            <Text isSelected={+item === +height}>{item}cm</Text>
          </Row>
        ))}
      </ModalInner>
    </ModalWrapper>
  </>
);

export default ProfileHeightModal;
