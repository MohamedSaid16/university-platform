import { apiClient } from './apiClient';
import { LoginRequest, RegisterRequest, LoginResponse, RegisterResponse, ChangePasswordRequest } from '../types/auth.types';
import { User } from '../types/user.types';

export const authService = {
  async login(data: LoginRequest) {
    const response = await apiClient.post<LoginResponse>('/auth/login', data);
    return response;
  },

  async register(data: RegisterRequest) {
    const response = await apiClient.post<RegisterResponse>('/auth/register', data);
    return response;
  },

  async logout() {
    const response = await apiClient.post('/auth/logout');
    localStorage.removeItem('accessToken');
    return response;
  },

  async refreshToken() {
    const response = await apiClient.post<{ accessToken: string }>('/auth/refresh');
    return response;
  },

  async getCurrentUser() {
    const response = await apiClient.get<{ user: User }>('/auth/me');
    return response;
  },

  async changePassword(data: ChangePasswordRequest) {
    const response = await apiClient.post('/auth/change-password', data);
    return response;
  },

  async verifyEmail(token: string) {
    const response = await apiClient.get(`/auth/verify-email/${token}`);
    return response;
  },

  async resendVerification(email: string) {
    const response = await apiClient.post('/auth/resend-verification', { email });
    return response;
  },

  // Admin only
  async createUserByAdmin(data: any) {
    const response = await apiClient.post('/auth/admin/create-user', data);
    return response;
  },

  async adminResetPassword(userId: string) {
    const response = await apiClient.post(`/auth/admin/reset-password/${userId}`);
    return response;
  }
};