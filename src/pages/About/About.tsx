import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import AboutHero from '../../components/features/about/AboutHero';
import MissionSection from '../../components/features/about/MissionSection';
import HistorySection from '../../components/features/about/HistorySection';
import TeamSection from '../../components/features/about/TeamSection';

const About: React.FC = () => {
  return (
    <MainLayout>
      <AboutHero />
      <MissionSection />
      <HistorySection />
      <TeamSection />
    </MainLayout>
  );
};

export default About;