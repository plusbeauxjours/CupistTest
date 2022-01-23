import React from "react";
import styled from "styled-components";
import { IProfile } from "../types/profileTypes";

interface IProps {
  data: IProfile;
}

const Container = styled.div`
  display: grid;
  max-width: 600px;
  max-height: 400px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 50%);
  grid-gap: 3px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const ProfilePhotoBox: React.FC<IProps> = React.memo(
  ({ data: { pictures = [] } = {} }) => (
    <Container>
      <Img src={require("../assets/profile/81.png")} />
      <Img src={require("../assets/profile/82.png")} />
      <Img src={require("../assets/profile/80.png")} />
      <Img src={require("../assets/image/person.png")} />
      <Img src={require("../assets/image/person.png")} />
      <Img src={require("../assets/image/person.png")} />
    </Container>
  )
);

export default ProfilePhotoBox;
