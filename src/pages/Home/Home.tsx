import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import HeroSection from '../../components/features/home/HeroSection';
import BannerSection from '../../components/features/home/BannerSection'; // جديد
import FeaturesSection from '../../components/features/home/FeaturesSection';
import GallerySection from '../../components/features/home/GallerySection'; // جديد
import StatisticsSection from '../../components/features/home/StatisticsSection';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <BannerSection />      {/* أضف هذا */}
      <FeaturesSection />
      <GallerySection />     {/* أضف هذا */}
      <StatisticsSection />
    </MainLayout>
  );
};

export default Home;