import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  mustChangePassword?: boolean;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      fetchUser();
    } else {
      setState(prev => ({ ...prev, loading: false }));
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await api.get('/auth/me');
      setState({
        user: response.data.data.user,
        isAuthenticated: true,
        loading: false,
        error: null
      });
    } catch (error) {
      localStorage.removeItem('accessToken');
      setState({
        user: null,
        isAuthenticated: false,
        loading: false,
        error: 'Session expired'
      });
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const response = await api.post('/auth/login', { email, password });
      const { accessToken, user, requiresPasswordChange } = response.data.data;
      
      localStorage.setItem('accessToken', accessToken);
      setState({
        user,
        isAuthenticated: true,
        loading: false,
        error: null
      });

      if (requiresPasswordChange) {
        navigate('/change-password');
      } else {
        navigate(`/${user.role.toLowerCase()}/dashboard`);
      }
      
      return { success: true };
    } catch (error: any) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error.response?.data?.error?.message || 'Login failed'
      }));
      return { success: false, error: error.response?.data?.error?.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setState({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null
    });
    navigate('/login');
  };

  return {
    ...state,
    login,
    logout,
    fetchUser
  };
};