import React, { useState } from 'react';
import { 
  Users, BookOpen, Award, FileText, 
  Clock, Shield, Zap, Globe, ChevronRight,
  GraduationCap, Calendar, MessageSquare, BarChart3
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Users,
      title: 'Student Portal',
      description: 'Access grades, projects, complaints, and communicate with teachers in one place',
      color: 'from-blue-600 to-blue-400',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      stats: '2,500+ active students',
      benefits: ['Real-time grade updates', 'Direct messaging', 'Project submission']
    },
    {
      icon: BookOpen,
      title: 'Course Management',
      description: 'Powerful tools for creating, organizing, and delivering course content',
      color: 'from-orange-600 to-orange-400',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      stats: '150+ courses',
      benefits: ['Lesson planning', 'Assignment grading', 'Resource library']
    },
    {
      icon: GraduationCap,
      title: 'Graduation Projects',
      description: 'End-to-end PFE project management from proposal to final defense',
      color: 'from-green-600 to-green-400',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      stats: '500+ projects',
      benefits: ['Supervisor assignment', 'Progress tracking', 'Online defense']
    },
    {
      icon: FileText,
      title: 'Disciplinary Committee',
      description: 'Streamlined case management for fair and transparent resolutions',
      color: 'from-purple-600 to-purple-400',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      stats: '95% resolution rate',
      benefits: ['Case tracking', 'Hearing scheduling', 'Decision documentation']
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Instant notifications for grades, announcements, and important deadlines',
      color: 'from-yellow-600 to-yellow-400',
      bgColor: 'bg-yellow-50',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      stats: 'Real-time sync',
      benefits: ['Push notifications', 'Email alerts', 'Calendar integration']
    },
    {
      icon: Shield,
      title: 'Secure System',
      description: 'Enterprise-grade security with role-based access and data protection',
      color: 'from-indigo-600 to-indigo-400',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      stats: 'Bank-level security',
      benefits: ['Role-based access', 'Data encryption', 'Audit logs']
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      description: 'Seamless communication between students, teachers, and administration',
      color: 'from-pink-600 to-pink-400',
      bgColor: 'bg-pink-50',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      stats: '10k+ messages/day',
      benefits: ['Group chats', 'Announcements', 'Private messaging']
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into academic performance and trends',
      color: 'from-teal-600 to-teal-400',
      bgColor: 'bg-teal-50',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      stats: 'Real-time analytics',
      benefits: ['Performance tracking', 'Trend analysis', 'Export reports']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Modern Education
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your academic life in one integrated platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Container */}
                <div className={`
                  relative bg-white rounded-2xl p-6 
                  transition-all duration-500 ease-out
                  ${isHovered 
                    ? 'shadow-2xl scale-105 -translate-y-2' 
                    : 'shadow-lg hover:shadow-xl'
                  }
                `}>
                  
                  {/* Icon Container */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`
                      w-16 h-16 rounded-xl flex items-center justify-center
                      transition-all duration-500
                      ${isHovered ? 'scale-110' : ''}
                    `}>
                      <div className={`
                        w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} 
                        flex items-center justify-center shadow-lg
                        transition-all duration-500
                        ${isHovered ? 'rotate-6' : ''}
                      `}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Stats Badge */}
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {feature.stats}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2 mb-4">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color} mr-2`}></div>
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-400">
                      Feature {index + 1}/{features.length}
                    </span>
                    
                    <button className={`
                      flex items-center text-sm font-medium transition-all duration-300
                      ${isHovered 
                        ? `text-transparent bg-clip-text bg-gradient-to-r ${feature.color}` 
                        : 'text-gray-400'
                      }
                    `}>
                      Learn More
                      <ChevronRight className={`
                        w-4 h-4 ml-1 transition-transform duration-300
                        ${isHovered ? 'translate-x-1' : ''}
                      `} />
                    </button>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} 
                    opacity-0 group-hover:opacity-5 transition-opacity duration-500
                    pointer-events-none
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <span className="relative z-10 flex items-center">
              Explore All Features
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;