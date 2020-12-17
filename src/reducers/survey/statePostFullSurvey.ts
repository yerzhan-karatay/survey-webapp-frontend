import { getType, PayloadAction } from 'typesafe-actions';
import { fetchPostSurveyFullAction, createSurveyFullAction } from '../../actions';
import { FullSurveyRequest } from '../../models';

export interface CreateSurveyFullState extends FullSurveyRequest {
  isFetching: boolean;
  error: string;
}

const initialState: CreateSurveyFullState = {
  isFetching: false,
  title: "",
  error: "",
  questions: [
    {
      title: '',
      options: ['', '', ''],
    },
  ],
};

export function createSurveyFull(
  state: CreateSurveyFullState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(createSurveyFullAction.clear):
      return {
        ...initialState,
      };

    case getType(createSurveyFullAction.update):
      const updateObj: { [index:string]: any } = {};
      updateObj[action.payload.key] = action.payload.value;
      return {
        ...state,
        ...updateObj,
      };

    case getType(fetchPostSurveyFullAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchPostSurveyFullAction.success):
      return {
        ...state,
        isFetching: false,
      };

    case getType(fetchPostSurveyFullAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
