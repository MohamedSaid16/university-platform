import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { 
  LogIn, Eye, EyeOff, Sparkles 
} from 'lucide-react';

const loginImage = 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80';

interface LoginFormProps {
  onSuccess?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login successful', { ...formData, rememberMe });
      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/dashboard');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={loginImage} 
            alt="Modern office" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-slate-700/60 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-between p-10">
          <div className="text-white">
            <div className="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-3 py-1 mb-5 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              <span className="text-xs font-medium tracking-wide">Welcome Back</span>
            </div>
            <h2 className="text-4xl font-semibold leading-tight">
              Secure access to your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-gray-100">
                professional workspace
              </span>
            </h2>
            <p className="mt-3 text-sm text-white/80 max-w-sm">
              Manage your account and continue your journey with confidence.
            </p>
          </div>

          <div className="text-white/80 text-xs">
            Trusted by modern teams for streamlined workflows.
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-slate-700 to-gray-900 rounded-2xl text-white mb-4 shadow-lg">
              <LogIn className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-semibold text-slate-900">Sign in</h1>
            <p className="text-sm text-slate-500">Enter your credentials to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email address"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              placeholder="you@company.com"
              required
              error={errors.email}
            />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange('password')}
                placeholder="••••••••"
                required
                error={errors.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 text-slate-500 hover:text-slate-700"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-slate-700 focus:ring-slate-600 border-slate-300 rounded"
                />
                <span className="ml-2 text-slate-600">Remember me</span>
              </label>
              <Link 
                to="/forgot-password" 
                className="text-slate-700 hover:text-slate-900 font-medium"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isLoading}
              className="w-full bg-slate-800 hover:bg-slate-900"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-slate-600 mt-5">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-slate-800 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;