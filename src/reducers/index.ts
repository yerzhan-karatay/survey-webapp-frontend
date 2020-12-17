import { combineReducers } from 'redux';

import { stateUser, UserState } from './user/stateUser';
import { stateUserLogin, UserLoginState } from './user/stateUserLogin';
import { stateUserSignup, UserSignupState } from './user/stateUserSignup';

import { createSurveyFull, CreateSurveyFullState } from './survey/statePostFullSurvey';
import { createSurvey, CreateSurveyState } from './survey/stateCreateSurvey';
import { deleteSurvey, DeleteSurveyState } from './survey/stateDeleteSurvey';
import { getSurveyFull, GetSurveyFullState } from './survey/stateGetFullSurvey';
import { getSurvey, GetSurveyState } from './survey/stateSurvey';
import { getSurveyList, GetSurveyListState } from './survey/stateSurveyList';
import { updateSurvey, UpdateSurveyState } from './survey/stateUpdateSurvey';

import { createResponse, CreateResponseState } from './response/stateCreateReponse';
import { getReponseAnswers, GetReponseAnswersState } from './response/stateGetReponseAnswers';
import { getResponsedSurveys, GetResponsedSurveysState } from './response/stateGetReponsedSurveys';
import { getReponsesPerSurvey, GetReponsesPerSurveyState } from './response/stateGetReponsesPerSurvey';

export interface State {
  stateUser: UserState;
  stateUserLogin: UserLoginState;
  stateUserSignup: UserSignupState;

  createSurveyFull: CreateSurveyFullState;
  createSurvey: CreateSurveyState;
  deleteSurvey: DeleteSurveyState;
  getSurveyFull: GetSurveyFullState;
  getSurvey: GetSurveyState;
  getSurveyList: GetSurveyListState;
  updateSurvey: UpdateSurveyState;

  createResponse: CreateResponseState;
  getReponseAnswers: GetReponseAnswersState;
  getResponsedSurveys: GetResponsedSurveysState;
  getReponsesPerSurvey: GetReponsesPerSurveyState;
}

const rootReducer = combineReducers({
  stateUser,
  stateUserLogin,
  stateUserSignup,

  createSurveyFull,
  createSurvey,
  deleteSurvey,
  getSurveyFull,
  getSurvey,
  getSurveyList,
  updateSurvey,

  createResponse,
  getReponseAnswers,
  getResponsedSurveys,
  getReponsesPerSurvey,
});

export default rootReducer;
