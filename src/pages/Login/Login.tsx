import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to dashboard (will implement later)
      console.log('Login successful', formData);
    }, 1500);
  };

  return (
    <AuthLayout title="Sign in to your account">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <Input
          label="Email address"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          required
        />
        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
          required
        />
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isLoading}
          className="w-full"
        >
          Sign in
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;