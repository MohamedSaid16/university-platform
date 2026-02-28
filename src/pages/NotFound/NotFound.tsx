import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';
import Button from '../../components/common/Button';

const NotFound: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-slate-200/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-slate-300/60 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-xl mx-auto px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/80 border border-slate-200 shadow-lg mb-6">
            <span className="text-3xl font-bold text-slate-800">!</span>
          </div>

          <h1 className="text-[110px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
            404
          </h1>
          <h2 className="text-3xl font-semibold mt-4 mb-4 text-slate-900">
            Page Not Found
          </h2>
          <p className="text-slate-600 mb-8">
            The page you are looking for doesn’t exist or has been moved.  
            Check the URL or return to the homepage.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link to="/">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-900">
                Go Back Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;