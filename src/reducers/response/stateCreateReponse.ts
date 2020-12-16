import { getType, PayloadAction } from 'typesafe-actions';
import { fetchPostResponseAction, createResponseAction } from '../../actions';
import { ReponseAnswerRequest } from '../../models';

export interface CreateResponseState {
  isFetching: boolean;
  surveyId: number;
  responseAnsList: ReponseAnswerRequest[];
}

const initialState: CreateResponseState = {
  isFetching: false,
  surveyId: 0,
  responseAnsList: [],
};

export function createResponse(
  state: CreateResponseState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(createResponseAction.clear):
      return {
        ...initialState,
      };

    case getType(createResponseAction.update):
      const updateObj: { [index:string]: any } = {};
      updateObj[action.payload.key] = action.payload.value;
      return {
        ...state,
        ...updateObj,
      };

    case getType(fetchPostResponseAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchPostResponseAction.success):
      return {
        ...state,
        isFetching: false,
      };

    case getType(fetchPostResponseAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
