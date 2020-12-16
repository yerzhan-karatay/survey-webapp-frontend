import AppConfig from '../config';
import { Survey, ReponseAnswerRequest, ResponseAnswer, ReponseAnswerResponse } from '../models';
import axios from './axios';

export async function postResponse(surveyId: number, payload: ReponseAnswerRequest[]) {
  await axios.post(`${AppConfig.API_URL}/survey/${surveyId}/responses`, payload);
}

export async function getResponsedSurveysByUserID(): Promise<Survey[]> {
  const response = await axios.get(`${AppConfig.API_URL}/responses/my`);
  return response.data;
}

export async function getResponseAnswersByID(surveyId: number, responseId: number): Promise<ResponseAnswer[]> {
  const response = await axios.get(`${AppConfig.API_URL}/survey/${surveyId}/responses/${responseId}`);
  return response.data;
}

export async function getResponsesBySurveyID(surveyId: number): Promise<ReponseAnswerResponse[]> {
  const response = await axios.get(`${AppConfig.API_URL}/survey/${surveyId}/responses`);
  return response.data;
}
