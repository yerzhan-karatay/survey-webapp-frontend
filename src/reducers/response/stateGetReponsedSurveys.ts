import { getType, PayloadAction } from 'typesafe-actions';
import { fetchGetResponsedSurveysAction } from '../../actions';
import { RespondedSurveys } from '../../models';

export interface GetResponsedSurveysState {
  isFetching: boolean;
  list: RespondedSurveys[];
}

const initialState: GetResponsedSurveysState = {
  isFetching: false,
  list: [],
};

export function getResponsedSurveys(
  state: GetResponsedSurveysState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(fetchGetResponsedSurveysAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchGetResponsedSurveysAction.success):
      return {
        list: action.payload,
        isFetching: false,
      };

    case getType(fetchGetResponsedSurveysAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
