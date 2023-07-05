'use client'
import Layout from './layout.js';
import AboutSection from './components/MissionSection.js';
import ProgramsSection from './components/ProgramsSection.js';
import MainBanner from './components/MainBanner.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

const queryClient = new QueryClient();


const Index = () => {

  return (

    <QueryClientProvider client={queryClient}>
    
    <Layout>
      <Navbar />
        <MainBanner />
        <ProgramsSection />
        <AboutSection />
      <Footer />
    </Layout>
    </QueryClientProvider>

  );
};

export default Index;
