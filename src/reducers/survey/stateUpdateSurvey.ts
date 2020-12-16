import { getType, PayloadAction } from 'typesafe-actions';
import { fetchUpdateSurveyAction, updateSurveyAction } from '../../actions';
import { Survey } from '../../models';

export interface UpdateSurveyState extends Survey {
  isFetching: boolean;
}

const initialState: UpdateSurveyState = {
  isFetching: false,
  id: 0,
  title: "",
  user_id: 0,
};

export function updateSurvey(
  state: UpdateSurveyState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(updateSurveyAction.clear):
      return {
        ...initialState,
      };

    case getType(updateSurveyAction.update):
      const updateObj: { [index:string]: any } = {};
      updateObj[action.payload.key] = action.payload.value;
      return {
        ...state,
        ...updateObj,
      };

    case getType(fetchUpdateSurveyAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchUpdateSurveyAction.success):
      return {
        ...state,
        isFetching: false,
      };

    case getType(fetchUpdateSurveyAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
