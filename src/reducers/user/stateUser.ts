import { getType, PayloadAction } from 'typesafe-actions';
import { fetchGetUserAction } from '../../actions';
import { User } from '../../models';

export interface UserState extends User {
  isFetching: boolean;
}

const initialState: UserState = {
  isFetching: true,
  id: 0,
  name: "",
  email: "",
  password: "",
  full_name: "",
  created: undefined,
};

export function stateUser(
  state: UserState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(fetchGetUserAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchGetUserAction.success):
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      };

    case getType(fetchGetUserAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
