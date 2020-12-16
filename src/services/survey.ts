import AppConfig from '../config';
import { Survey, FullSurveyRequest, TitleRequest, FullSurveyWithQnA } from '../models';
import axios from './axios';

export async function postSurveyWithQnA(payload: FullSurveyRequest) {
  await axios.post(`${AppConfig.API_URL}/surveys/full`, payload);
}

export async function postSurvey(payload: TitleRequest) {
  await axios.post(`${AppConfig.API_URL}/surveys`, payload);
}

export async function getSurveyWithQnA(surveyId: number): Promise<FullSurveyWithQnA> {
  const response = await axios.get(`${AppConfig.API_URL}/surveys/${surveyId}`);
  return response.data;
}

export async function getSurveyListByUserIDinToken(): Promise<Survey[]> {
  const response = await axios.get(`${AppConfig.API_URL}/surveys`);
  return response.data;
}

export async function getSurveyByID(surveyId: number): Promise<Survey> {
  const response = await axios.get(`${AppConfig.API_URL}/surveys/${surveyId}`);
  return response.data;
}

export async function updateSurvey(surveyId: number, payload: TitleRequest) {
  await axios.put(`${AppConfig.API_URL}/surveys/${surveyId}`, payload);
}

export async function deleteSurvey(surveyId: number) {
  await axios.delete(`${AppConfig.API_URL}/surveys/${surveyId}`);
}
