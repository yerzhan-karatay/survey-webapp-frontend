import { createAsyncAction, createAction } from "typesafe-actions";
import {
  User,
  Survey,
  ResponseAnswer,
  AuthCredentials,
  FullSurveyRequest,
  FullSurveyWithQnA,
  ReponseAnswerRequest,
  ReponseAnswerResponse,
  RespondedSurveys,
  Token,
  TitleRequest,
} from "../models";

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const CANCEL = "CANCEL";

function createRequestTypes(base: string) {
  return [REQUEST, SUCCESS, FAILURE, CANCEL].reduce(
    (acc: any, type: string) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {},
  );
}

const LOGIN_POST = createRequestTypes('LOGIN_POST');
const SIGNUP_POST = createRequestTypes('SIGNUP_POST');

const USER_GET = createRequestTypes("USER_GET");

const SURVEY_FULL_GET = createRequestTypes('SURVEY_FULL_GET');
const SURVEY_FULL_POST = createRequestTypes('SURVEY_FULL_POST');
const SURVEY_POST = createRequestTypes('SURVEY_POST');
const SURVEY_UPDATE = createRequestTypes('SURVEY_UPDATE');
const SURVEY_DELETE = createRequestTypes('SURVEY_DELETE');
const SURVEY_GET = createRequestTypes('SURVEY_GET');
const SURVEYS_GET = createRequestTypes('SURVEYS_GET');

const RESPONSE_POST = createRequestTypes('RESPONSE_POST');
const RESPONSED_SURVEY_GET = createRequestTypes('RESPONSED_SURVEY_GET');
const RESPONSES_BY_SURVEY_ID_GET = createRequestTypes('RESPONSES_BY_SURVEY_ID_GET');
const RESPONSE_ANSWERS_GET = createRequestTypes('RESPONSE_ANSWERS_GET');

export interface KeyValue {
  key: string;
  value: any;
}

// USER
export const fetchGetUserAction = createAsyncAction(
  USER_GET[REQUEST],
  USER_GET[SUCCESS],
  USER_GET[FAILURE],
)<undefined, User, Error>();

// LOGIN
export const fetchPostLoginAction = createAsyncAction(
  LOGIN_POST[REQUEST],
  LOGIN_POST[SUCCESS],
  LOGIN_POST[FAILURE],
)<AuthCredentials, Token, Error>();

export const createPostLoginAction = {
  clear: createAction('CREATE_LOGIN_POST_CLEAR')(),
  update: createAction('CREATE_LOGIN_POST_UPDATE')<KeyValue>(),
};

// SIGNUP
export const fetchPostSignupAction = createAsyncAction(
  SIGNUP_POST[REQUEST],
  SIGNUP_POST[SUCCESS],
  SIGNUP_POST[FAILURE],
)<{ email: string, full_name: string, password: string }, Token, Error>();

export const createPostSignupAction = {
  clear: createAction('CREATE_SIGNUP_POST_CLEAR')(),
  update: createAction('CREATE_SIGNUP_POST_UPDATE')<KeyValue>(),
};

// SURVEY
export const fetchPostSurveyFullAction = createAsyncAction(
  SURVEY_FULL_POST[REQUEST],
  SURVEY_FULL_POST[SUCCESS],
  SURVEY_FULL_POST[FAILURE],
)<FullSurveyRequest, undefined, Error>();

export const createSurveyFullAction = {
  clear: createAction('CREATE_FULL_SURVEY_CLEAR')(),
  update: createAction('CREATE_FULL_SURVEY_UPDATE')<KeyValue>(),
};

export const fetchGetSurveyFullAction = createAsyncAction(
  SURVEY_FULL_GET[REQUEST],
  SURVEY_FULL_GET[SUCCESS],
  SURVEY_FULL_GET[FAILURE],
)<{ surveyId: number }, FullSurveyWithQnA, Error>();

export const fetchGetSurveysAction = createAsyncAction(
  SURVEYS_GET[REQUEST],
  SURVEYS_GET[SUCCESS],
  SURVEYS_GET[FAILURE],
)<undefined, Survey[], Error>();

export const fetchGetSurveyAction = createAsyncAction(
  SURVEY_GET[REQUEST],
  SURVEY_GET[SUCCESS],
  SURVEY_GET[FAILURE],
)<{ surveyId: number }, Survey, Error>();

export const fetchDeleteSurveyAction = createAsyncAction(
  SURVEY_DELETE[REQUEST],
  SURVEY_DELETE[SUCCESS],
  SURVEY_DELETE[FAILURE],
)<{ surveyId: number }, undefined, Error>();

export const fetchPostSurveyAction = createAsyncAction(
  SURVEY_POST[REQUEST],
  SURVEY_POST[SUCCESS],
  SURVEY_POST[FAILURE],
)<TitleRequest, undefined, Error>();

export const createSurveyAction = {
  clear: createAction('CREATE_SURVEY_CLEAR')(),
  update: createAction('CREATE_SURVEY_UPDATE')<KeyValue>(),
};

export const fetchUpdateSurveyAction = createAsyncAction(
  SURVEY_UPDATE[REQUEST],
  SURVEY_UPDATE[SUCCESS],
  SURVEY_UPDATE[FAILURE],
)<Survey, undefined, Error>();

export const updateSurveyAction = {
  clear: createAction('UPDATE_SURVEY_CLEAR')(),
  update: createAction('UPDATE_SURVEY_UPDATE')<KeyValue>(),
};

// RESPONSE
export const fetchGetResponsesBySurveyIdAction = createAsyncAction(
  RESPONSES_BY_SURVEY_ID_GET[REQUEST],
  RESPONSES_BY_SURVEY_ID_GET[SUCCESS],
  RESPONSES_BY_SURVEY_ID_GET[FAILURE],
)<{ surveyId: number }, ReponseAnswerResponse[], Error>();

export const fetchGetResponseAnswersAction = createAsyncAction(
  RESPONSE_ANSWERS_GET[REQUEST],
  RESPONSE_ANSWERS_GET[SUCCESS],
  RESPONSE_ANSWERS_GET[FAILURE],
)<{ surveyId: number, responseId: number }, ResponseAnswer[], Error>();

export const fetchGetResponsedSurveysAction = createAsyncAction(
  RESPONSED_SURVEY_GET[REQUEST],
  RESPONSED_SURVEY_GET[SUCCESS],
  RESPONSED_SURVEY_GET[FAILURE],
)<undefined, RespondedSurveys[], Error>();

export const fetchPostResponseAction = createAsyncAction(
  RESPONSE_POST[REQUEST],
  RESPONSE_POST[SUCCESS],
  RESPONSE_POST[FAILURE],
)<{ surveyId: number, responseAnsList: ReponseAnswerRequest[] }, undefined, Error>();

export const createResponseAction = {
  clear: createAction('CREATE_RESPONSE_CLEAR')(),
  update: createAction('CREATE_RESPONSE_UPDATE')<KeyValue>(),
};
