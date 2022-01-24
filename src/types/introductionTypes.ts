export interface IIntroductionData {
  data: IIntroduction[];
  meta: IIntroductionMeta;
}

export interface IIntroduction {
  id: number;
  name: string;
  pictures: string[];
  age?: number;
  location?: string;
  introduction?: string;
  distance?: number;
  height?: number;
  company?: string;
  job?: string;
}

export interface IIntroductionMeta {
  next?: IIntroductionMetaNext[];
}

export interface IIntroductionMetaNext {
  id: number;
  url: string;
  method: string;
}
