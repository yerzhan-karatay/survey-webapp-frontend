import { call, put } from "redux-saga/effects";
import {
  fetchGetResponsesBySurveyIdAction,
  fetchGetResponseAnswersAction,
  fetchGetResponsedSurveysAction,
  fetchPostResponseAction,
} from "../actions";
import { ResponseAnswer, Survey, ReponseAnswerResponse } from "../models";
import * as responseServices from "../services/response";
import history from "../history";

export function* requestPostResponse(
  action: ReturnType<typeof fetchPostResponseAction.request>,
): Generator {
  try {
    const { surveyId, responseAnsList } = action.payload;
    yield call(responseServices.postResponse, surveyId, responseAnsList);
    yield put(fetchPostResponseAction.success());
    history.push("/response/list");
  } catch (e) {
    yield put(fetchPostResponseAction.failure(e));
  }
}

export function* requestGetResponsedSurveys(): Generator {
  try {
    const surveys = yield call(responseServices.getResponsedSurveysByUserID);
    yield put(fetchGetResponsedSurveysAction.success(surveys as Survey[]));
  } catch (e) {
    yield put(fetchGetResponsedSurveysAction.failure(e));
  }
}

export function* requestGetResponseAnswers(
  action: ReturnType<typeof fetchGetResponseAnswersAction.request>,
): Generator {
  try {
    const { surveyId, responseId } = action.payload;
    const responseAns = yield call(responseServices.getResponseAnswersByID, surveyId, responseId);
    yield put(fetchGetResponseAnswersAction.success(responseAns as ResponseAnswer[]));
  } catch (e) {
    yield put(fetchGetResponseAnswersAction.failure(e));
  }
}

export function* requestGetResponse(
  action: ReturnType<typeof fetchGetResponsesBySurveyIdAction.request>,
): Generator {
  try {
    const { surveyId } = action.payload;
    const responseAns = yield call(responseServices.getResponsesBySurveyID, surveyId);
    yield put(fetchGetResponsesBySurveyIdAction.success(responseAns as ReponseAnswerResponse[]));
  } catch (e) {
    yield put(fetchGetResponsesBySurveyIdAction.failure(e));
  }
}
