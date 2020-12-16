import { getType, PayloadAction } from 'typesafe-actions';
import { fetchPostLoginAction } from '../../actions';
import { AuthCredentials } from '../../models';
import conf from '../../config';

export interface UserLoginState extends AuthCredentials {
  isFetching: boolean;
}

const initialState: UserLoginState = {
  isFetching: true,
  email: "",
  password: "",
};

export function stateUserLogin(
  state: UserLoginState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(fetchPostLoginAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchPostLoginAction.success):
      localStorage.setItem(conf.TOKEN, action.payload.token);
      return {
        ...state,
        isFetching: false,
      };

    case getType(fetchPostLoginAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
