import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-serif font-bold text-center text-slate-900 mb-12">Our Location</h2>
        <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52072.63852609253!2d1.270942856304492!3d35.37103774969941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1281d1b3b5c5b5b5%3A0x5b5b5b5b5b5b5b5b!2sUniversit%C3%A9%20Ibn%20Khaldoun%20Tiaret!5e0!3m2!1sen!2sdz!4v1700000000000!5m2!1sen!2sdz"
            width="100%"
            height="100%"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;