import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import ContactHero from '../../components/features/contact/ContactHero';
import ContactForm from '../../components/features/contact/ContactForm';
import ContactInfo from '../../components/features/contact/ContactInfo';
import MapSection from '../../components/features/contact/MapSection';

const Contact: React.FC = () => {
  return (
    <MainLayout>
      <ContactHero />
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <MapSection />
    </MainLayout>
  );
};

export default Contact;