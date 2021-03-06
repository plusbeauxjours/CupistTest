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
import ProfileHeightModal from "components/ProfileHeightModal";
import ProfileBodyTypeModal from "components/ProfileBodyTypeModal";
import ProfileEducationModal from "components/ProfileEducationModal";
import Loading from "components/Loading";

interface IProps {}

interface ITheme {
  placeHolder?: boolean;
  disabled?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  height: 100%;
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
    props.placeHolder
      ? props.theme.colors.gray2
      : props.disabled
      ? props.theme.colors.black
      : props.theme.colors.glamBlue};
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
  &::placeholder {
    color: ${(props) => props.theme.colors.gray2};
  }
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

const Profile: React.FC<IProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState<IProfileData>(null);
  const [heightModalOpen, setHeightModalOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const [bodyTypeModalOpen, setBodyTypeModalOpen] = useState<boolean>(false);
  const [bodyType, setBodyType] = useState<string>("");

  const [educationModalOpen, setEducationModalOpen] = useState<boolean>(false);
  const [education, setEducation] = useState<string>("");

  const [company, setCompany] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await callApi("profile");
      setData(data);

      setHeight(data?.data.height || "");
      setBodyType(data?.data.body_type || "");
      setEducation(data?.data.education || "");
      setCompany(data?.data.company || "");
      setJob(data?.data.job || "");
      setSchool(data?.data.school || "");
      setIntroduction(data?.data.introduction || "");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

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
      <Form>
        <Wrapper>
          <ProfilePhotoBox data={data?.data} />
          <Row>
            <GrayText>
              ????????? ????????? ????????? ??? ?????? ????????? ???????????????
              <GrayTextBold
                as="button"
                onClick={() => console.log("??? ????????????")}
              >
                ??? ????????????
              </GrayTextBold>
            </GrayText>
          </Row>
          <Box>
            <Row>
              <FrontText>?????????</FrontText>
              <BackText>
                {data?.data.name}
                <Icon src={require("../assets/icon/profile_edit/lock.png")} />
              </BackText>
            </Row>
            <Row>
              <FrontText>??????</FrontText>
              <BackText disabled>{Genders[data?.data.gender]}</BackText>
            </Row>
            <Row>
              <FrontText>??????</FrontText>
              <BackText>{data?.data.birthday}</BackText>
            </Row>
            <Row>
              <FrontText>??????</FrontText>
              <BackText>{data?.data.location}</BackText>
            </Row>
          </Box>
          <Box>
            <Row>
              <FrontText>???</FrontText>
              <BackText
                as="button"
                onClick={(e) => {
                  e.preventDefault();
                  setHeightModalOpen(true);
                }}
                placeHolder={!bodyType}
              >
                {height || "??????????????????"}
              </BackText>
            </Row>
            <Row>
              <FrontText>??????</FrontText>
              <BackText
                as="button"
                onClick={(e) => {
                  e.preventDefault();
                  setBodyTypeModalOpen(true);
                }}
                placeHolder={!bodyType}
              >
                {BodyTypes[bodyType] || "??????????????????"}
              </BackText>
            </Row>
          </Box>
          <Box>
            <IntroductionTitle>??????</IntroductionTitle>
            <Input
              type="text"
              placeholder="???????????? ????????? ???????????? ??????????????????"
              multiple
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
            />
            <GrayText>
              SNS ????????? ??? ????????? ?????? ??? ????????? ?????? ???????????????
            </GrayText>
          </Box>
          <Box>
            <Row>
              <FrontText>??????</FrontText>
              <BackText
                as="input"
                type="text"
                placeholder="??????????????????"
                value={company}
                onChange={(e) => setCompany(e.currentTarget.value)}
              />
            </Row>
            <Row>
              <FrontText>??????</FrontText>
              <BackText
                as="input"
                type="text"
                placeholder="??????????????????"
                value={job}
                onChange={(e) => setJob(e.currentTarget.value)}
              />
            </Row>
            <Row>
              <FrontText>??????</FrontText>
              <BackText
                as="button"
                onClick={(e) => {
                  e.preventDefault();
                  setEducationModalOpen(true);
                }}
                placeHolder={!education}
              >
                {Educations[education] || "??????????????????"}
              </BackText>
            </Row>
            <Row>
              <FrontText>??????</FrontText>
              <BackText
                as="input"
                type="text"
                placeholder="??????????????????"
                value={school}
                onChange={(e) => setSchool(e.currentTarget.value)}
              />
            </Row>
          </Box>
        </Wrapper>
        <ProfileHeightModal
          data={Array.from(
            {
              length:
                data?.meta.height_range.max - data?.meta.height_range.min + 1,
            },
            (_, i) => data?.meta.height_range.min + i
          )}
          isModalOpen={heightModalOpen}
          setHeightModalOpen={setHeightModalOpen}
          height={height}
          setHeight={setHeight}
        />
        <ProfileBodyTypeModal
          data={data?.meta.body_types}
          isModalOpen={bodyTypeModalOpen}
          setBodyTypeModalOpen={setBodyTypeModalOpen}
          bodyType={bodyType}
          setBodyType={setBodyType}
        />
        <ProfileEducationModal
          data={data?.meta.educations}
          isModalOpen={educationModalOpen}
          setEducationModalOpen={setEducationModalOpen}
          education={education}
          setEducation={setEducation}
        />
      </Form>
    );
  }
};

export default Profile;
