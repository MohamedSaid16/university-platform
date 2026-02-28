import React from 'react';

const contactBg = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1400';

const ContactHero: React.FC = () => {
  return (
    <section className="relative h-[55vh] min-h-[360px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={contactBg} alt="Contact Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-700/80"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-sm tracking-wide">We are here to help</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
        <p className="text-lg md:text-2xl text-white/90">Get in touch with our university team</p>
      </div>
    </section>
  );
};

export default ContactHero;