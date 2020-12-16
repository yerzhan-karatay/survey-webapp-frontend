import { getType, PayloadAction } from 'typesafe-actions';
import { fetchPostSurveyAction, createSurveyAction } from '../../actions';
import { TitleRequest } from '../../models';

export interface CreateSurveyState extends TitleRequest {
  isFetching: boolean;
}

const initialState: CreateSurveyState = {
  isFetching: false,
  title: "",
};

export function createSurvey(
  state: CreateSurveyState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(createSurveyAction.clear):
      return {
        ...initialState,
      };

    case getType(createSurveyAction.update):
      const updateObj: { [index:string]: any } = {};
      updateObj[action.payload.key] = action.payload.value;
      return {
        ...state,
        ...updateObj,
      };

    case getType(fetchPostSurveyAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchPostSurveyAction.success):
      return {
        ...state,
        isFetching: false,
      };

    case getType(fetchPostSurveyAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
