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

export type Experiences = {
  experiences: Experience;
  technologies: Technology;
  textContent: {
    subText1: string;
    subText2: string;
  };
};
