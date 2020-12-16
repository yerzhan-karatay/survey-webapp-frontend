import { takeEvery, all, takeLeading } from 'redux-saga/effects';
import {
  fetchGetUserAction,
  fetchPostLoginAction,
  fetchPostSignupAction,

  fetchPostSurveyFullAction,
  fetchPostSurveyAction,
  fetchGetSurveyFullAction,
  fetchGetSurveysAction,
  fetchGetSurveyAction,
  fetchUpdateSurveyAction,
  fetchDeleteSurveyAction,
  
  fetchGetResponsesBySurveyIdAction,
  fetchGetResponseAnswersAction,
  fetchGetResponsedSurveysAction,
  fetchPostResponseAction,
} from '../actions';

import {
  requestGetUser,
  requestPostLogin,
  requestPostSignup,
} from './user';

import {
  requestPostSurveyFull,
  requestPostSurvey,
  requestGetSurveyFull,
  requestGetSurveys,
  requestGetSurvey,
  requestUpdateSurvey,
  requestDeleteSurvey,
} from './survey';

import {
  requestGetResponse,
  requestGetResponseAnswers,
  requestGetResponsedSurveys,
  requestPostResponse,
} from './response';

export default function* rootSaga() {
  yield all([
    takeEvery(fetchGetUserAction.request, requestGetUser),
    takeLeading(fetchPostLoginAction.request, requestPostLogin),
    takeLeading(fetchPostSignupAction.request, requestPostSignup),

    takeLeading(fetchPostSurveyFullAction.request, requestPostSurveyFull),
    takeLeading(fetchPostSurveyAction.request, requestPostSurvey),
    takeEvery(fetchGetSurveyFullAction.request, requestGetSurveyFull),
    takeEvery(fetchGetSurveysAction.request, requestGetSurveys),
    takeEvery(fetchGetSurveyAction.request, requestGetSurvey),
    takeLeading(fetchUpdateSurveyAction.request, requestUpdateSurvey),
    takeLeading(fetchDeleteSurveyAction.request, requestDeleteSurvey),

    takeEvery(fetchGetResponsesBySurveyIdAction.request, requestGetResponse),
    takeEvery(fetchGetResponseAnswersAction.request, requestGetResponseAnswers),
    takeEvery(fetchGetResponsedSurveysAction.request, requestGetResponsedSurveys),
    takeLeading(fetchPostResponseAction.request, requestPostResponse),
  ]);
}
