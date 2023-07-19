type ProjectType = {
  technologies: string[];
  source: string;
  link: string;
  _id: string;
  title: string;
  description: string;
};

export type Project = ProjectType[];

type ExperienceType = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
};

export type Experience = ExperienceType[];

type TechnologySetting = { alt: string; src: string };

export type TechnologyType = {
  title: string;
  items: TechnologySetting[];
  _createdAt: string;
};

export type Technology = TechnologyType[];

export type Resume = {
  name: string;
  fileUrl: string;
};

type SocialSetting = {
  name: string;
  url: string;
};

export type Social = SocialSetting[];

export type TextContentSettings = {
  title: string;
  jobTitle: string;
  aboutMainTexT: any;
  aboutTldr: any;
  technologyMainText: string;
  technologySubText1: string;
  technologySubText2: string;
  contactAddress1: string;
  contactAddress2: string;
};
