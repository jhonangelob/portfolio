import { Footer } from '@/components/Footer';
import {
  fetchExperiences,
  fetchProjects,
  fetchResume,
  fetchSocials,
  fetchTechnologies,
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

  const [projects, experiences, resume, technologies, socials] =
    await Promise.all([
      projectsData,
      experiencesData,
      resumeData,
      technologiesData,
      socialsData,
    ]);

  const fileExist = resume.fileUrl !== null;

  return (
    <main className='app min-h-screen w-full flex-center flex-col'>
      <Header socials={socials} />
      <Featured />
      <About file={resume} />
      <Projects projects={projects} />
      <Experiences experiences={experiences} technologies={technologies} />
      <Contact file={resume} socials={socials} />
      <Footer />
    </main>
  );
};

export default Home;
