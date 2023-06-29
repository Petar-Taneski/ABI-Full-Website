import dynamic from 'next/dynamic';
import Layout from '../app/layout.js';
import AboutSection from '../app/components/MissionSection.js'
import ProgramsSection from '../app/components/ProgramsSection.js'
import MainBanner from '../app/components/MainBanner.js'
const DynamicNavbar = dynamic(() => import('../app/components/Navbar'));

const HomePage = () => {

  // if (typeof window !== 'undefined') {
  //   const zoomLevel = 0.65; // Desired zoom level (65%)
  //   document.documentElement.style.zoom = zoomLevel.toString();
  // }
  return (
    <Layout>

      <MainBanner />
      <ProgramsSection />
      <AboutSection />

    </Layout>
  );
};

export default HomePage;
