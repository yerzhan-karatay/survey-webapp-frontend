export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  full_name: string;
  created?: Date;
}

export interface Survey {
  id: number;
  title: string;
  created?: Date;
  user_id: number;
}

export interface Response {
  id: number;
  created?: Date;
  survey_id: number;
  user_id: number;
}

export interface ResponseAnswer {
  id: number;
  response_id: number;
  question_id: number;
  option_id: number;
}

export interface Question {
  id: number;
  title: string;
  created?: Date;
  survey_id: number;
}

export interface Option {
  id: number;
  title: string;
  created?: Date;
  question_id: number;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface QuestionRequest {
  title: string;
  options: string[];
}

export interface FullSurveyRequest {
  title: string;
  questions: QuestionRequest[];
}

export interface FullSurveyWithQnAQuestion {
  id: number;
  title: string;
  options: Option[];
}

export interface FullSurveyWithQnA {
  survey: Survey;
  questions: FullSurveyWithQnAQuestion[];
}

export interface ReponseAnswerRequest {
  question_id: number;
  option_id: number;
}

export interface ReponseAnswerResponse {
  response_answers: ResponseAnswer[];
  response: Response;
}

export interface Token {
  token: string;
}

export interface TitleRequest {
  title: string;
}
