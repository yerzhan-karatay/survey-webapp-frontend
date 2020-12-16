import { getType, PayloadAction } from 'typesafe-actions';
import { fetchPostSignupAction } from '../../actions';
import { AuthCredentials } from '../../models';
import conf from '../../config';
// TODO: add second password

export interface UserSignupState extends AuthCredentials {
  isFetching: boolean;
}

const initialState: UserSignupState = {
  isFetching: true,
  email: "",
  password: "",
};

export function stateUserSignup(
  state: UserSignupState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(fetchPostSignupAction.request):
      return {
        ...state,
        isFetching: true,
      };

    case getType(fetchPostSignupAction.success):
      localStorage.setItem(conf.TOKEN, action.payload.token);
      return {
        ...state,
        isFetching: false,
      };

    case getType(fetchPostSignupAction.failure):
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
