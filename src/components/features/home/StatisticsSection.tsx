import React, { useEffect, useState, useRef } from 'react';
import { Users, BookOpen, Award, Building2, TrendingUp, Star } from 'lucide-react';

const StatisticsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      value: 2500,
      label: 'Active Students',
      suffix: '+',
      color: 'from-gray-400 to-gray-300'
    },
    {
      icon: BookOpen,
      value: 150,
      label: 'Expert Teachers',
      suffix: '+',
      color: 'from-gray-400 to-gray-300'
    },
    {
      icon: Award,
      value: 500,
      label: 'Projects Completed',
      suffix: '+',
      color: 'from-gray-400 to-gray-300'
    },
    {
      icon: Building2,
      value: 98,
      label: 'Satisfaction Rate',
      suffix: '%',
      color: 'from-gray-400 to-gray-300'
    }
  ];

  const Counter = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration, isVisible]);

    return <>{count}{suffix}</>;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
    >
      {/* Silver Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #9ca3af 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Orbs - Silver Version */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/50 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center text-gray-800 mb-16">
          <div className="inline-flex items-center bg-gray-200/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-gray-300">
            <TrendingUp className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Our Impact in Numbers</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Growing Together with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of students and teachers already using our platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Silver Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-200 shadow-xl hover:shadow-2xl">
                  {/* Icon Container */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} p-4 shadow-xl group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-gray-600 font-medium mb-4">
                    {stat.label}
                  </div>

                  {/* Rating Stars (for satisfaction) */}
                  {stat.label === 'Satisfaction Rate' && (
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  )}

                  {/* Decorative Line */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-1 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg italic border-l-4 border-gray-400 pl-4 inline-block">
            "Empowering education through technology"
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;