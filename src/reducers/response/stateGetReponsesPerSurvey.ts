import { getType, PayloadAction } from 'typesafe-actions';
import { fetchGetResponsesBySurveyIdAction } from '../../actions';
import { ReponseAnswerResponse } from '../../models';

export interface GetReponsesPerSurveyState {
  isFetching: boolean;
  list: ReponseAnswerResponse[];
}

const initialState: GetReponsesPerSurveyState = {
  isFetching: false,
  list: [],
};

export function getReponsesPerSurvey(
  state: GetReponsesPerSurveyState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(fetchGetResponsesBySurveyIdAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchGetResponsesBySurveyIdAction.success):
      return {
        list: action.payload,
        isFetching: false,
      };

    case getType(fetchGetResponsesBySurveyIdAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
