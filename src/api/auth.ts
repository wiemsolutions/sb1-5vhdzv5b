import { client } from './client';

export interface LoginData {
  email: string;
  password: string;
}

interface AdminResponse {
  token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: 'ADMIN';
  };
}

export interface RegisterData extends LoginData {
  firstName: string;
  lastName: string;
  companyName?: string;
  phone?: string;
}

export async function login(data: LoginData) {
  // Temporary admin credentials check until backend is ready
  if (data.email === 'admin@ksbiznes.pl' && data.password === 'admin123') {
    const response: AdminResponse = {
      token: 'admin-token',
      user: {
        id: '1',
        email: 'admin@ksbiznes.pl',
        firstName: 'Admin',
        lastName: 'User',
        role: 'ADMIN'
      }
    };
    return response;
  }
  
  return client('/auth/login', {
    method: 'POST',
    body: data,
  });
}

export async function register(data: RegisterData) {
  return client('/auth/register', {
    method: 'POST',
    body: data,
  });
}

export async function getCurrentUser(token: string) {
  return client('/users/profile', {
    token,
  });
}