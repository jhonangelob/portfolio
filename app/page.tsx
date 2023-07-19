import { Footer } from '@/components/Footer';
import {
  fetchExperiences,
  fetchProjects,
  fetchResume,
  fetchSocials,
  fetchTechnologies,
  fetchTextContent,
} from './api/sanity';
import { Contact } from '@/components/Contact';
import { Experiences } from '@/components/Experiences';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Featured } from '@/components/Featured';
import { Header } from '@/components/Header';

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

  const { jobTitle, aboutMainText, contactAddress1, contactAddress2 } =
    textContents;
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
  const experiencePageText = {};

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
      <About
        content={aboutPageData}
        mainText={aboutMainText}
        tldr={tldr}
        file={resume}
      />
      <Projects textContent={textContents} projects={projects} />
      <Experiences experiences={experiences} technologies={technologies} />
      <Contact content={contactPageData} />
      <Footer />
    </main>
  );
};

export default Home;
