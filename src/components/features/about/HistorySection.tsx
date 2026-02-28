import React from 'react';
import { Calendar, Users, Award, Building2 } from 'lucide-react';

const HistorySection: React.FC = () => {
  const milestones = [
    { year: 1980, event: 'University Founded', description: 'Ibn Khaldoun University was established', icon: Calendar },
    { year: 1985, event: 'First Graduates', description: 'First batch of students graduated', icon: Users },
    { year: 2000, event: 'Faculty Expansion', description: 'Expanded to 8 faculties', icon: Building2 },
    { year: 2010, event: 'Research Center', description: 'Research center opened', icon: Award },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Our <span className="text-slate-700">History</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Ibn Khaldoun University – Tiaret has grown into one of Algeria’s leading academic institutions.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '28K+', label: 'Students' },
                { value: '1.1K+', label: 'Faculty' },
                { value: '8', label: 'Faculties' },
                { value: '50+', label: 'Programs' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-5 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">{item.year}</div>
                    <h3 className="text-lg font-serif font-semibold mb-1">{item.event}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;