import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { callApi } from "../data/api";
import ProfilePhotoBox from "../components/ProfilePhotoBox";
import {
  BodyTypes,
  Genders,
  Educations,
  IProfileData,
} from "../types/profileTypes";

interface IProps {}

interface ITheme {
  disabled?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
`;

const Text = styled.p<ITheme>`
  font-size: ${(props) => props.theme.fontSize.L};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  color: ${(props) =>
    props.disabled ? props.theme.colors.black : props.theme.colors.glamBlue};
`;

const FrontText = styled(Text)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  width: 35%;
`;

const IntroductionTitle = styled(FrontText)`
  height: 35px;
`;

const GrayText = styled.p`
  font-size: ${(props) => props.theme.fontSize.S};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.gray4};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
`;

const GrayTextBold = styled(GrayText)`
  margin-left: 5px;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

const BackText = styled(Text)`
  display: flex;
  flex-direction: row;
  justify-content: center
  align-items: center;
  padding-left: 16px;
  width: 65%;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.M};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  &::placeholder {
    color: ${(props) => props.theme.colors.gray2};
  }
`;

const Box = styled.div`
  padding: 8px 16px;
  width: 100%;
  border-top: ${(props) => `1px ${props.theme.colors.gray1} solid`};
  max-width: 600px;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 5px;
`;

const Form = styled.form``;

const Profile: React.FC<IProps> = () => {
  const [data, setData] = useState<IProfileData>(null);
  const [heightModalOpen, setHeightModalOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("");

  const [bodyTypeModalOpen, setBodyTypeModalOpen] = useState<boolean>(false);
  const [bodyType, setBodyType] = useState<string>("");

  const [educationModalOpen, setEducationModalOpen] = useState<boolean>(false);
  const [education, setEducation] = useState<string>("");

  const [company, setCompany] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");

  const getData = async () => {
    const { data } = await callApi("profile");
    setData(data);

    setHeight(data?.data.height || "");
    setBodyType(data?.data.body_type || "");
    setEducation(data?.data.education || "");
    setCompany(data?.data.company || "");
    setJob(data?.data.job || "");
    setSchool(data?.data.school || "");
    setIntroduction(data?.data.introduction || "");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Form>
      <Wrapper>
        <ProfilePhotoBox data={data?.data} />
        <Row>
          <GrayText>
            다양한 매력을 보여줄 수 있는 사진을 올려주세요
            <GrayTextBold
              as="button"
              onClick={() => console.log("더 알아보기")}
            >
              더 알아보기
            </GrayTextBold>
          </GrayText>
        </Row>
        <Box>
          <Row>
            <FrontText>닉네임</FrontText>
            <BackText>
              {data?.data.name}
              <Icon src={require("../assets/icon/profile_edit/lock.png")} />
            </BackText>
          </Row>
          <Row>
            <FrontText>성별</FrontText>
            <BackText disabled>{Genders[data?.data.gender]}</BackText>
          </Row>
          <Row>
            <FrontText>생일</FrontText>
            <BackText>{data?.data.birthday}</BackText>
          </Row>
          <Row>
            <FrontText>위치</FrontText>
            <BackText>{data?.data.location}</BackText>
          </Row>
        </Box>
        <Box>
          <Row>
            <FrontText>키</FrontText>
            <BackText as="button" onClick={() => setHeightModalOpen(true)}>
              {height}
            </BackText>
          </Row>
          <Row>
            <FrontText>체형</FrontText>
            <BackText as="button" onClick={() => setBodyTypeModalOpen(true)}>
              {BodyTypes[bodyType]}
            </BackText>
          </Row>
        </Box>
        <Box>
          <IntroductionTitle>소개</IntroductionTitle>
          <Input
            type="text"
            placeholder="회원님의 매력을 간단하게 소개해주세요"
            multiple
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
          />
          <GrayText>
            SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다
          </GrayText>
        </Box>
        <Box>
          <Row>
            <FrontText>직장</FrontText>
            <BackText
              as="input"
              type="text"
              placeholder="입력해주세요"
              value={company}
              onChange={(e) => setCompany(e.currentTarget.value)}
            />
          </Row>
          <Row>
            <FrontText>직업</FrontText>
            <BackText
              as="input"
              type="text"
              placeholder="입력해주세요"
              value={job}
              onChange={(e) => setJob(e.currentTarget.value)}
            />
          </Row>
          <Row>
            <FrontText>학력</FrontText>
            <BackText as="button" onClick={() => setEducationModalOpen(true)}>
              {Educations[education]}
            </BackText>
          </Row>
          <Row>
            <FrontText>학교</FrontText>
            <BackText
              as="input"
              type="text"
              placeholder="입력해주세요"
              value={school}
              onChange={(e) => setSchool(e.currentTarget.value)}
            />
          </Row>
        </Box>
      </Wrapper>
    </Form>
  );
};

export default Profile;
