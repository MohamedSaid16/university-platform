import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { 
  Lock, UserPlus, 
  Eye, EyeOff,
  CheckCircle, XCircle, ArrowRight, ArrowLeft,
  Sparkles
} from 'lucide-react';

const registerImage = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80';

interface RegisterFormProps {
  onSuccess?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    studentId: '',
    department: 'computer-science',
    level: 'L1',
    speciality: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    studentId: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep1 = () => {
    let valid = true;
    const newErrors = { firstName: '', lastName: '', email: '', phone: '' };

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^(\+213|0)[5-7]\d{8}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid Algerian phone number';
      valid = false;
    }

    setErrors(prev => ({ ...prev, ...newErrors }));
    return valid;
  };

  const validateStep2 = () => {
    let valid = true;
    const newErrors = { studentId: '' };

    if (!formData.studentId) {
      newErrors.studentId = 'Student ID is required';
      valid = false;
    }

    setErrors(prev => ({ ...prev, ...newErrors }));
    return valid;
  };

  const validateStep3 = () => {
    let valid = true;
    const newErrors = { password: '', confirmPassword: '' };

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase and number';
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    if (!acceptedTerms) {
      alert('Please accept the terms and conditions');
      valid = false;
    }

    setErrors(prev => ({ ...prev, ...newErrors }));
    return valid;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('Registration successful', formData);
      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/login?registered=true');
      }
    }, 1500);
  };

  const passwordStrength = () => {
    const password = formData.password;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={registerImage} 
            alt="Professional team" 
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
              <span className="text-xs font-medium tracking-wide">Join our community</span>
            </div>
            <h2 className="text-4xl font-semibold leading-tight">
              Build your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-gray-100">
                professional profile
              </span>
            </h2>
            <p className="mt-3 text-sm text-white/80 max-w-sm">
              Create a secure account with a premium experience.
            </p>
          </div>

          <div className="text-white/80 text-xs">
            Secure registration with enterprise‑grade standards.
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-slate-700 to-gray-900 rounded-2xl text-white mb-4 shadow-lg">
              <UserPlus className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-semibold text-slate-900">Create account</h1>
            <p className="text-sm text-slate-500">Get started in just a few steps</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-6 max-w-md mx-auto">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs transition-all duration-500 ${
                  s <= step 
                    ? 'bg-gradient-to-r from-slate-700 to-gray-900 text-white shadow-lg' 
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-2 transition-all duration-500 ${
                    s < step ? 'bg-gradient-to-r from-slate-700 to-gray-900' : 'bg-slate-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="First name"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange('firstName')}
                    placeholder="Ahmed"
                    required
                    error={errors.firstName}
                  />
                  <Input
                    label="Last name"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange('lastName')}
                    placeholder="Benali"
                    required
                    error={errors.lastName}
                  />
                </div>

                <Input
                  label="Email address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  placeholder="you@company.com"
                  required
                  error={errors.email}
                />

                <Input
                  label="Phone number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  placeholder="0555 12 34 56"
                  required
                  error={errors.phone}
                />
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <Input
                  label="Student ID"
                  type="text"
                  value={formData.studentId}
                  onChange={handleChange('studentId')}
                  placeholder="2024001234"
                  required
                  error={errors.studentId}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Department
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => handleChange('department')(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-slate-600 focus:border-transparent bg-white"
                    >
                      <option value="computer-science">Computer Science</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Level
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) => handleChange('level')(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-slate-600 focus:border-transparent bg-white"
                    >
                      <option value="L1">Licence 1</option>
                      <option value="L2">Licence 2</option>
                      <option value="L3">Licence 3</option>
                      <option value="M1">Master 1</option>
                      <option value="M2">Master 2</option>
                    </select>
                  </div>
                </div>

                <Input
                  label="Speciality"
                  type="text"
                  value={formData.speciality}
                  onChange={handleChange('speciality')}
                  placeholder="e.g., Software Engineering"
                />
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                  <div className="relative">
                    <Input
                      label="Confirm password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange('confirmPassword')}
                      placeholder="••••••••"
                      required
                      error={errors.confirmPassword}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-8 text-slate-500 hover:text-slate-700"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Password Strength */}
                {formData.password && (
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-700">Password strength</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        passwordStrength() <= 2 ? 'bg-red-100 text-red-700' :
                        passwordStrength() <= 4 ? 'bg-amber-100 text-amber-700' :
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                        {passwordStrength() <= 2 ? 'Weak' : passwordStrength() <= 4 ? 'Medium' : 'Strong'}
                      </span>
                    </div>
                    <div className="flex gap-1 h-1.5 mb-3">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div
                          key={s}
                          className={`flex-1 rounded-full ${
                            s <= passwordStrength()
                              ? s <= 2 ? 'bg-red-500' : s <= 4 ? 'bg-amber-500' : 'bg-emerald-500'
                              : 'bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-1">
                      {[
                        { test: formData.password.length >= 8, text: '8+ characters' },
                        { test: /[A-Z]/.test(formData.password), text: 'Uppercase' },
                        { test: /[a-z]/.test(formData.password), text: 'Lowercase' },
                        { test: /\d/.test(formData.password), text: 'Number' }
                      ].map((req, index) => (
                        <div key={index} className="flex items-center text-xs">
                          {req.test ? (
                            <CheckCircle className="w-3 h-3 text-emerald-500 mr-1" />
                          ) : (
                            <XCircle className="w-3 h-3 text-slate-300 mr-1" />
                          )}
                          <span className={req.test ? 'text-emerald-700' : 'text-slate-500'}>
                            {req.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <label className="flex items-start p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-400 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="h-4 w-4 text-slate-700 focus:ring-slate-600 border-slate-300 rounded mt-0.5"
                  />
                  <span className="ml-2 text-xs text-slate-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-slate-800 font-semibold hover:underline">
                      Terms
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-slate-800 font-semibold hover:underline">
                      Privacy
                    </Link>
                  </span>
                </label>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-2">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={handlePrev}
                  className="flex items-center text-sm"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={handleNext}
                  className={`flex items-center text-sm ${step > 1 ? 'ml-auto' : 'w-full'} bg-slate-800 hover:bg-slate-900`}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isLoading}
                  className={`flex items-center text-sm ${step > 1 ? 'ml-auto' : 'w-full'} bg-slate-800 hover:bg-slate-900`}
                >
                  {isLoading ? 'Creating...' : 'Create account'}
                </Button>
              )}
            </div>
          </form>

          {/* Login Link */}
          <p className="text-center text-xs text-slate-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-slate-800 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;