import { createAsyncAction } from "typesafe-actions";
import { User } from "../models";

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

const USER_GET = createRequestTypes("USER_GET");

// USER
export const fetchGetUserAction = createAsyncAction(
  USER_GET[REQUEST],
  USER_GET[SUCCESS],
  USER_GET[FAILURE],
)<undefined, User, Error>();
