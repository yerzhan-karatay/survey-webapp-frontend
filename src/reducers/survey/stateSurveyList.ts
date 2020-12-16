import { getType, PayloadAction } from 'typesafe-actions';
import { fetchGetSurveysAction } from '../../actions';
import { Survey } from '../../models';

export interface GetSurveyListState {
  isFetching: boolean;
  list: Survey[];
}

const initialState: GetSurveyListState = {
  isFetching: false,
  list: [],
};

export function getSurveyList(
  state: GetSurveyListState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(fetchGetSurveysAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchGetSurveysAction.success):
      return {
        list: action.payload,
        isFetching: false,
      };

    case getType(fetchGetSurveysAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
