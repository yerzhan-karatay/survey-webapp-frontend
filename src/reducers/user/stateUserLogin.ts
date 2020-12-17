import { getType, PayloadAction } from 'typesafe-actions';
import { fetchPostLoginAction, createPostLoginAction } from '../../actions';
import { AuthCredentials } from '../../models';
import conf from '../../config';
export interface UserLoginState extends AuthCredentials {
  isFetching: boolean;
  error: string;
}

const initialState: UserLoginState = {
  isFetching: false,
  email: "",
  password: "",
  error: "",
};

export function stateUserLogin(
  state: UserLoginState = initialState,
  action: PayloadAction<string, any>,
) {
  switch (action.type) {
    case getType(createPostLoginAction.clear):
      return {
        ...initialState,
      };

    case getType(createPostLoginAction.update):
      const updateObj: { [index:string]: any } = {};
      updateObj[action.payload.key] = action.payload.value;
      return {
        ...state,
        ...updateObj,
      };
    
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
        error: action.payload.response.data.error,
        isFetching: false,
      };

    default:
      return state;
  }
}
