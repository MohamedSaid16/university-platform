import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, GraduationCap, Users, BookOpen } from 'lucide-react';
import heroBg from '../../../assets/images/hero-bg.jpg'; // أضف الصورة هنا

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="University Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay خفيف جداً - 20% فقط */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Elements (تظهر فوق الصورة) */}
      <div className="absolute top-20 left-10 animate-float">
        <GraduationCap className="w-16 h-16 text-white/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float delay-500">
        <Users className="w-20 h-20 text-white/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <BookOpen className="w-12 h-12 text-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white py-20">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/30">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
          <span className="text-sm font-medium">✨ Now Available - University Platform 2026</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Ibn Khaldoun</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
            University
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
          A digital platform for managing and coordinating pedagogical activities 
          at the Department of Computer Science
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link 
            to="/register"
            className="group relative px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          
          <button 
            className="group bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center border border-white/30"
            onClick={() => window.open('#', '_blank')}
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '2500+', label: 'Students' },
            { value: '150+', label: 'Teachers' },
            { value: '200+', label: 'Courses' },
            { value: '98%', label: 'Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-black/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/80 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;