import React from 'react';
import { Target, Eye, Heart, Shield } from 'lucide-react';

const MissionSection: React.FC = () => {
  const items = [
    { icon: Target, title: 'Our Mission', description: 'Deliver quality education that prepares students for professional success.' },
    { icon: Eye, title: 'Our Vision', description: 'Be a leading institution in higher education and research.' },
    { icon: Heart, title: 'Our Values', description: 'Excellence, integrity, innovation, diversity.' },
    { icon: Shield, title: 'Our Commitment', description: 'Foster an inclusive and supportive environment for all.' },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
            Mission & Values
          </h2>
          <p className="text-lg text-slate-600">Committed to academic excellence since 1980</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;