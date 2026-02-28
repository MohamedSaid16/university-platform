import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const info = [
    { icon: MapPin, label: 'Address', value: 'BP 78, Tiaret 14000, Algeria' },
    { icon: Phone, label: 'Phone', value: '+213 555 55 55 55' },
    { icon: Mail, label: 'Email', value: 'info@univ-tiaret.dz' },
    { icon: Clock, label: 'Hours', value: 'Sun-Thu, 8AM-5PM' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Contact Information</h2>
      <div className="space-y-6">
        {info.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{item.label}</h3>
                <p className="text-slate-600">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;