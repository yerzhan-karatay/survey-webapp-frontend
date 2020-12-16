import { call, put } from "redux-saga/effects";
import {
  fetchPostSurveyFullAction,
  fetchPostSurveyAction,
  fetchGetSurveyFullAction,
  fetchGetSurveysAction,
  fetchGetSurveyAction,
  fetchUpdateSurveyAction,
  fetchDeleteSurveyAction,
} from "../actions";
import { FullSurveyWithQnA, Survey } from "../models";
import * as surveyServices from "../services/survey";
import history from "../history";

export function* requestPostSurveyFull(
  action: ReturnType<typeof fetchPostSurveyFullAction.request>,
): Generator {
  try {
    yield call(surveyServices.postSurveyWithQnA, action.payload);
    yield put(fetchPostSurveyFullAction.success());
    history.push("/survey/list");
  } catch (e) {
    yield put(fetchPostSurveyFullAction.failure(e));
  }
}

export function* requestPostSurvey(
  action: ReturnType<typeof fetchPostSurveyAction.request>,
): Generator {
  try {
    yield call(surveyServices.postSurvey, action.payload);
    yield put(fetchPostSurveyAction.success());
    history.push("/survey/list");
  } catch (e) {
    yield put(fetchPostSurveyAction.failure(e));
  }
}

export function* requestGetSurveyFull(
  action: ReturnType<typeof fetchGetSurveyFullAction.request>,
): Generator {
  try {
    const { surveyId } = action.payload;
    const response = yield call(surveyServices.getSurveyWithQnA, surveyId);
    yield put(fetchGetSurveyFullAction.success(response as FullSurveyWithQnA));
  } catch (e) {
    yield put(fetchGetSurveyFullAction.failure(e));
  }
}

export function* requestGetSurveys(): Generator {
  try {
    const response = yield call(surveyServices.getSurveyListByUserIDinToken);
    yield put(fetchGetSurveysAction.success(response as Survey[]));
  } catch (e) {
    yield put(fetchGetSurveysAction.failure(e));
  }
}

export function* requestGetSurvey(
  action: ReturnType<typeof fetchGetSurveyAction.request>,
): Generator {
  try {
    const { surveyId } = action.payload;
    const response = yield call(surveyServices.getSurveyByID, surveyId);
    yield put(fetchGetSurveyAction.success(response as Survey));
  } catch (e) {
    yield put(fetchGetSurveyAction.failure(e));
  }
}

export function* requestUpdateSurvey(
  action: ReturnType<typeof fetchUpdateSurveyAction.request>,
): Generator {
  try {
    const survey = action.payload;
    yield call(surveyServices.updateSurvey, survey.id, survey);
    yield put(fetchUpdateSurveyAction.success());
  } catch (e) {
    yield put(fetchUpdateSurveyAction.failure(e));
  }
}

export function* requestDeleteSurvey(
  action: ReturnType<typeof fetchDeleteSurveyAction.request>,
): Generator {
  try {
    const { surveyId } = action.payload;
    yield call(surveyServices.deleteSurvey, surveyId);
    yield put(fetchDeleteSurveyAction.success());
  } catch (e) {
    yield put(fetchDeleteSurveyAction.failure(e));
  }
}
