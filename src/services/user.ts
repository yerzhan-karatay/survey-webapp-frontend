import AppConfig from '../config';
import { Token, AuthCredentials, User } from '../models';
import axios from './axios';

export async function postUser(payload: AuthCredentials): Promise<Token> {
  const response = await axios.post(`${AppConfig.API_URL}/users`, payload);
  return response.data;
}

export async function getUser(): Promise<User> {
  const response = await axios.get(`${AppConfig.API_URL}/users/me`);
  return response.data;
}

export async function loginUser(payload: AuthCredentials): Promise<Token> {
  const response = await axios.post(`${AppConfig.API_URL}/login`, payload);
  return response.data;
}
