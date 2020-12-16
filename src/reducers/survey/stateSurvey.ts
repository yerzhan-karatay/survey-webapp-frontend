import { getType, PayloadAction } from 'typesafe-actions';
import { fetchGetSurveyAction } from '../../actions';
import { Survey } from '../../models';

export interface GetSurveyState extends Survey {
  isFetching: boolean;
}

const initialState: GetSurveyState = {
  isFetching: false,
  id: 0,
  title: "",
  created: undefined,
  user_id: 0,
};

export function getSurvey(
  state: GetSurveyState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(fetchGetSurveyAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchGetSurveyAction.success):
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      };

    case getType(fetchGetSurveyAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
