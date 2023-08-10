import { About } from '@/src/components/About';
import { Contact } from '@/src/components/Contact';
import { Experiences } from '@/src/components/Experiences';
import { Featured } from '@/src/components/Featured';
import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { Projects } from '@/src/components/Projects';
import {
  fetchExperiences,
  fetchProjects,
  fetchResume,
  fetchSocials,
  fetchTechnologies,
  fetchTextContent,
} from '@/src/services/global/api';

const Home = async () => {
  const projectsData = fetchProjects();
  const experiencesData = fetchExperiences();
  const resumeData = fetchResume();
  const technologiesData = fetchTechnologies();
  const socialsData = fetchSocials();
  const textContent = fetchTextContent();

  const [projects, experiences, resume, technologies, socials, textContents] =
    await Promise.all([
      projectsData,
      experiencesData,
      resumeData,
      technologiesData,
      socialsData,
      textContent,
    ]);

  const {
    jobTitle,
    aboutMainText,
    technologySubText1,
    technologySubText2,
    contactAddress1,
    contactAddress2,
  } = textContents;
  const tldr = textContents.aboutTldr[0].children[0].text;

  const headerComponentData = {
    socials,
    showBanner: true,
  };

  const featuredPageData = {
    title: jobTitle,
  };

  const aboutPageData = {
    mainText: aboutMainText,
    tldr: tldr,
    file: resume,
  };

  const experiencePageText = {
    subText1: technologySubText1,
    subText2: technologySubText2,
  };

  const contactPageData = {
    address1: contactAddress1,
    address2: contactAddress2,
    file: resume,
    socials,
  };

  return (
    <main className='app min-h-screen w-full flex-center flex-col'>
      <Header content={headerComponentData} />
      <Featured content={featuredPageData} />
      <About content={aboutPageData} />
      <Projects projects={projects} />
      <Experiences
        textContent={experiencePageText}
        experiences={experiences}
        technologies={technologies}
      />
      <Contact content={contactPageData} />
      <Footer />
    </main>
  );
};

export default Home;
