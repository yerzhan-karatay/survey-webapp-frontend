import { getType, PayloadAction } from 'typesafe-actions';
import { fetchGetSurveyFullAction } from '../../actions';
import { FullSurveyWithQnA } from '../../models';

export interface GetSurveyFullState extends FullSurveyWithQnA {
  isFetching: boolean;
}

const initialState: GetSurveyFullState = {
  isFetching: false,
  survey: {
    id: 0,
    title: "",
    created: undefined,
    user_id: 0,
  },
  questions: [],
};

export function getSurveyFull(
  state: GetSurveyFullState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(fetchGetSurveyFullAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchGetSurveyFullAction.success):
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      };

    case getType(fetchGetSurveyFullAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
