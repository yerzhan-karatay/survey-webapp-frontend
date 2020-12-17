import { call, put } from "redux-saga/effects";
import {
  fetchGetUserAction,
  fetchPostLoginAction,
  fetchPostSignupAction,
} from "../actions";
import { Token, User } from "../models";
import * as userServices from "../services/user";
import history from "../history";

export function* requestPostSignup(
  action: ReturnType<typeof fetchPostSignupAction.request>,
): Generator {
  // TODO: add email and password validation
  try {
    const token = yield call(userServices.postUser, action.payload);
    yield put(fetchPostSignupAction.success(token as Token));
    const user = yield call(userServices.getUser);
    yield put(fetchGetUserAction.success(user as User));
    history.push("/account/survey");
  } catch (e) {
    yield put(fetchPostSignupAction.failure(e));
  }
}

export function* requestPostLogin(
  action: ReturnType<typeof fetchPostLoginAction.request>,
): Generator {
  try {
    const token = yield call(userServices.loginUser, action.payload);
    yield put(fetchPostLoginAction.success(token as Token));
    const user = yield call(userServices.getUser);
    yield put(fetchGetUserAction.success(user as User));
    history.push("/account/survey");
  } catch (e) {
    yield put(fetchPostLoginAction.failure(e));
  }
}

export function* requestGetUser(): Generator {
  try {
    const user = yield call(userServices.getUser);
    yield put(fetchGetUserAction.success(user as User));
  } catch (e) {
    yield put(fetchGetUserAction.failure(e));
  }
}
