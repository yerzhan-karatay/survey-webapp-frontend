import { getType, PayloadAction } from 'typesafe-actions';
import { fetchPostSignupAction, createPostSignupAction } from '../../actions';
import { AuthCredentials } from '../../models';
import conf from '../../config';
// TODO: add second password

export interface UserSignupState extends AuthCredentials {
  isFetching: boolean;
  full_name: string;
  error: string;
}

const initialState: UserSignupState = {
  isFetching: false,
  email: "",
  full_name: "",
  password: "",
  error: "",
};

export function stateUserSignup(
  state: UserSignupState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(createPostSignupAction.clear):
      return {
        ...initialState,
      };

    case getType(createPostSignupAction.update):
      const updateObj: { [index:string]: any } = {};
      updateObj[action.payload.key] = action.payload.value;
      return {
        ...state,
        ...updateObj,
      };
    
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
        error: action.payload.response.data.error,
        isFetching: false,
      };

    default:
      return state;
  }
}
