import { createAsyncAction } from "typesafe-actions";
import {
  User,
  Survey,
  ResponseAnswer,
  AuthCredentials,
  FullSurveyRequest,
  FullSurveyWithQnA,
  ReponseAnswerRequest,
  ReponseAnswerResponse,
  Token,
  TitleRequest
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

// SIGNUP
export const fetchPostSignupAction = createAsyncAction(
  SIGNUP_POST[REQUEST],
  SIGNUP_POST[SUCCESS],
  SIGNUP_POST[FAILURE],
)<AuthCredentials, Token, Error>();

// SURVEY
export const fetchPostSurveyFullAction = createAsyncAction(
  SURVEY_FULL_POST[REQUEST],
  SURVEY_FULL_POST[SUCCESS],
  SURVEY_FULL_POST[FAILURE],
)<FullSurveyRequest, undefined, Error>();

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

export const fetchUpdateSurveyAction = createAsyncAction(
  SURVEY_UPDATE[REQUEST],
  SURVEY_UPDATE[SUCCESS],
  SURVEY_UPDATE[FAILURE],
)<Survey, Survey, Error>();

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
)<undefined, Survey[], Error>();

export const fetchPostResponseAction = createAsyncAction(
  RESPONSE_POST[REQUEST],
  RESPONSE_POST[SUCCESS],
  RESPONSE_POST[FAILURE],
)<{ responseId: number, payload: ReponseAnswerRequest }, undefined, Error>();
