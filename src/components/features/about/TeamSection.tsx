import React from 'react';
import { Users, Shield, GraduationCap, BookOpen, FileText, FolderOpen, Newspaper, Layout, School, Brain, User, Crown } from 'lucide-react';

const universityLogo = '/web-app-manifest-192x192.png';

const TeamSection: React.FC = () => {
  const groups = [
    { number: 1, name: "Groupe 1", module: "Authentification", icon: Shield, members: ["Ghoulam Mohamed Saïd","Chelig Mohamed Amine","Reddas Belkacem Chabani"] },
    { number: 2, name: "Groupe 2", module: "Conseil Disciplinaire", icon: Shield, members: ["Ounes Abdelfattah Tahar","Belgacem Abdelkader Youcef","Ouadah Abdelkader"] },
    { number: 3, name: "Groupe 3", module: "Gestion des PFEs", icon: GraduationCap, members: ["DERRADJI Safaa","CHERRATI Noura"] },
    { number: 4, name: "Groupe 4", module: "Spécialités et affectation des étudiants", icon: BookOpen, members: ["Sadki Zineb","Nait Youcef Melina","Ya Asma"] },
    { number: 5, name: "Groupe 5", module: "Réclamation et justifications", icon: FileText, members: ["Hafsa Hayat","Hamani Ikram","Harbane Batoul"] },
    { number: 6, name: "Groupe 6", module: "Documents", icon: FolderOpen, members: ["Fatmi Douâa Nour El Yakin","Hella Meriem","Djebbour Razika"] },
    { number: 7, name: "Groupe 7", module: "Actualités", icon: Newspaper, members: ["Tlidji Saad","Yahia Mohamed Dhiaa Eddine"] },
    { number: 8, name: "Groupe 8", module: "Template Frontend/Backend", icon: Layout, members: ["Djellil Abdelkader Charef Eddine","Gaid Oussama","Derakaoui Mohamed"] },
    { number: 9, name: "Groupe 9", module: "Tableau de bord enseignant", icon: School, members: ["Lhacen Noudjoud Ferial","Hssain Khouloud"] },
    { number: 10, name: "Groupe 10", module: "Tableau de bord étudiant", icon: Users, members: ["Timezghine Narimene","Ouadah Nourhane","Benali Ammar Sonia"] },
    { number: 11, name: "Groupe 11", module: "Intelligence artificielle", icon: Brain, members: ["Hachemi Ahmed Zine Eddine","Lezar Abdelkader Yacine","Djaboure Mohamed"] }
  ];

  const groupLeaders = [
    "Ghoulam Mohamed Said",
    "Gaid Oussama"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <img src={universityLogo} alt="University Logo" className="w-20 h-20 object-contain" />
            <div className="text-sm uppercase tracking-widest text-slate-500">
              Ibn Khaldoun University — Tiaret
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-3">
            Project Teams
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Meet the students building the University Platform modules
          </p>
        </div>

        {/* Group Leaders */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center">
            <div className="flex items-center justify-center gap-2 mb-3 text-slate-700">
              <Crown className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">Group Leaders</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {groupLeaders.map((leader, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-medium"
                >
                  {leader}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.number}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-all"
              >
                <div className="p-6 border-b border-slate-200 bg-slate-100">
                  <div className="flex items-center justify-between mb-2 text-slate-700">
                    <span className="text-2xl font-bold">#{group.number}</span>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-slate-900">{group.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{group.module}</p>
                </div>

                <div className="p-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    Members ({group.members.length})
                  </h4>
                  <ul className="space-y-3">
                    {group.members.map((member, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <User className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-slate-200">
                    <span className="inline-flex items-center text-xs text-slate-500">
                      Module: {group.module}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supervisor */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white shadow-sm border border-slate-200 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Project Supervisor</h3>
            <p className="text-xl text-slate-700">Dr. Abdelkader BOUGUESSA – MCB</p>
            <p className="text-slate-500 mt-2">
              Université Ibn Khaldoun – Tiaret / Faculté MI / Département Informatique
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;