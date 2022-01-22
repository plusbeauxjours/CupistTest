export interface IProfile {
  id: number;
  name: string;
  pictures: string[];
  gender?: EGenders;
  birthday?: string;
  location?: string;
  introduction?: string;
  height?: number;
  body_type?: EBodyTypes;
  company?: string;
  job?: string;
  education?: EEducations;
  school?: string;
}

export interface IProfileMeta {
  genders: IGenders[];
  body_types: IBodyTypes[];
  educations: IEducations[];
  height_range: IHeight[];
}

export interface IGenders {
  key: string;
  name: string;
}

export interface IBodyTypes {
  key: string;
  name: string;
}

export interface IEducations {
  key: string;
  name: string;
}

export interface IHeight {
  min: number;
  max: number;
}

export enum EGenders {
  M = "남성",
  F = "여성",
}

export enum EBodyTypes {
  body_type_0 = "상관없음",
  body_type_00 = "마른",
  body_type_001 = "슬림 근육",
  body_type_01 = "보통",
  body_type_011 = "스팸",
  body_type_02 = "근육질",
  body_type_03 = "통통",
  body_type_031 = "우람",
}

export enum EEducations {
  education_00 = "고등학교",
  education_01 = "전문대",
  education_02 = "대학교",
  education_03 = "석사",
  education_04 = "박사",
  education_05 = "기타",
}
