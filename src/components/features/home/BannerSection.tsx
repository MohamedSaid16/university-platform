import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, BookOpen, Award } from 'lucide-react';
import Skeleton from '../../common/Skeleton';
import bannerBg from '../../../assets/images/computer.jpg';

const BannerSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Skeleton Loader */}
      {!imageLoaded && (
        <div className="absolute inset-0">
          <Skeleton className="w-full h-full" />
        </div>
      )}

      {/* Background Image */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <img 
          src={bannerBg} 
          alt="University Campus" 
          className="w-full h-full object-cover"
          onLoad={() => setImageLoaded(true)}
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-black/10 backdrop-blur-[2px] p-8 rounded-2xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Ibn Khaldoun University
              </span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Established in 1980, our university is dedicated to excellence in education, 
              research, and community service. Join over 28,000 students and 1,100 faculty 
              members in our journey of knowledge and discovery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/register"
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Apply Now
              </Link>
              <Link 
                to="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/10 backdrop-blur-[2px] rounded-xl p-6 text-center border border-white/20 transform hover:scale-105 transition-all duration-300">
              <GraduationCap className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold text-white">28K+</div>
              <div className="text-sm text-white/80">Students</div>
            </div>
            <div className="bg-black/10 backdrop-blur-[2px] rounded-xl p-6 text-center border border-white/20 transform hover:scale-105 transition-all duration-300">
              <Users className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold text-white">1.1K+</div>
              <div className="text-sm text-white/80">Teachers</div>
            </div>
            <div className="bg-black/10 backdrop-blur-[2px] rounded-xl p-6 text-center border border-white/20 transform hover:scale-105 transition-all duration-300">
              <BookOpen className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold text-white">8</div>
              <div className="text-sm text-white/80">Faculties</div>
            </div>
            <div className="bg-black/10 backdrop-blur-[2px] rounded-xl p-6 text-center border border-white/20 transform hover:scale-105 transition-all duration-300">
              <Award className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold text-white">15th</div>
              <div className="text-sm text-white/80">National Rank</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;