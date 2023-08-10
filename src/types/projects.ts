export type Project = {
  technologies: string[];
  source: string;
  link: string;
  _id: string;
  title: string;
  description: string;
};

export type Projects = {
  projects: Project[];
};
