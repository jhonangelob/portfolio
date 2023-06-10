import {
  fetchExperiences,
  fetchProjects,
  fetchResume,
  fetchSocials,
  fetchTechnologies,
} from './api/sanity';
import Header from '@/components/Header/Header';
import Featured from '@/components/Featured/Featured';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Experiences from '@/components/Experiences/Experiences';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

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
