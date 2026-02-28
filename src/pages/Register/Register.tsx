import React, { useEffect } from 'react';
import RegisterForm from '../../components/features/auth/RegisterForm';

const Register: React.FC = () => {
  useEffect(() => {
    // تسجيل أن الصفحة تم تحميلها
    console.log('✅ Register page loaded successfully');
    document.title = 'Register - Ibn Khaldoun University';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <RegisterForm />
    </div>
  );
};

export default Register;