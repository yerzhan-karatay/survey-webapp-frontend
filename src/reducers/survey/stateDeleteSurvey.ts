import { getType, PayloadAction } from 'typesafe-actions';
import { fetchDeleteSurveyAction } from '../../actions';

export interface DeleteSurveyState {
  isFetching: boolean;
}

const initialState: DeleteSurveyState = {
  isFetching: true,
};

export function deleteSurvey(
  state: DeleteSurveyState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(fetchDeleteSurveyAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchDeleteSurveyAction.success):
      return {
        ...state,
        isFetching: false,
      };

    case getType(fetchDeleteSurveyAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
