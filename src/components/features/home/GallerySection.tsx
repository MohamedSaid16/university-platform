import React, { useState } from 'react';
import { X, Camera } from 'lucide-react';
import studentsGroup from '../../../assets/images/Students.jpg';
import professorTeaching from '../../../assets/images/student1.jpg';
import graduationFamily from '../../../assets/images/student2.jpg';
import campusLife from '../../../assets/images/prof.jpg';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: studentsGroup,
      title: 'Student Life',
      description: 'Students collaborating on projects',
      category: 'Students',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      src: professorTeaching,
      title: 'Academic Excellence',
      description: 'Professor engaging with students in lecture',
      category: 'Faculty',
      color: 'from-orange-500 to-red-500'
    },
    {
      src: graduationFamily,
      title: 'Proud Moments',
      description: 'Graduate celebrating with family',
      category: 'Graduation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      src: campusLife,
      title: 'Campus Life',
      description: 'Students enjoying campus activities',
      category: 'Campus',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Camera className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Our Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            University Family
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A vibrant community of students, faculty, and staff dedicated to excellence in education
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${image.color}`}>
                    {image.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{image.description}</p>
                  
                  {/* View Button */}
                  <button className="flex items-center text-sm font-semibold hover:underline">
                    View Image
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;