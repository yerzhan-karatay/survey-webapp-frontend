import { getType, PayloadAction } from 'typesafe-actions';
import { fetchGetResponseAnswersAction } from '../../actions';
import { ResponseAnswer } from '../../models';

export interface GetReponseAnswersState {
  isFetching: boolean;
  list: ResponseAnswer[];
}

const initialState: GetReponseAnswersState = {
  isFetching: false,
  list: [],
};

export function getReponseAnswers(
  state: GetReponseAnswersState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(fetchGetResponseAnswersAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchGetResponseAnswersAction.success):
      return {
        list: action.payload,
        isFetching: false,
      };

    case getType(fetchGetResponseAnswersAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
