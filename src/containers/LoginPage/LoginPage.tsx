import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import { fetchPostLoginAction, createPostLoginAction } from '../../actions';
import Spin from '../../components/Spin';
import history from '../../history';

function LoginPage() {
  const { email, password, isFetching, error } = useSelector((state: State) => state.stateUserLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(createPostLoginAction.clear());
    };
  }, [dispatch]);

  function handleUpdate(key: string, value: string) {
    dispatch(createPostLoginAction.update({ key, value }));
  }

  function handleSubmit() {
    dispatch(fetchPostLoginAction.request({ email, password }));
  }

  return (
    <div className="login-page">
      <div className="login-page__greeting">
        Welcome back! Please enter your email and password below.
      </div>
      <div className="login-page__form common-form">
        <div className="common-form__group">
          <label className="common-form__group__label common-form__group__label--required">Email</label>
          <input
            required
            className="login-page__form__item common-form__group__input"
            type="email"
            name="email"
            placeholder="email@email.com"
            onChange={(e) => handleUpdate('email', e.target.value)}
          />
        </div>
        <div className="common-form__group">
          <label className="common-form__group__label common-form__group__label--required">Password</label>
          <input
            required
            className="login-page__form__item common-form__group__input"
            type="password"
            name="password"
            placeholder="Your password"
            onChange={(e) => handleUpdate('password', e.target.value)}
          />
        </div>
        {!isFetching && error && (<div className="common-form__error">{error}</div>)}
        <button
          type="submit"
          disabled={isFetching}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}className="common-form__submit btn">
          {isFetching ? (<><Spin /> <span className="inline">Loading</span></>) : 'Login'}
        </button>
      </div>
      <div className="login-page__footer">
        Don't have an account? Create an account <span onClick={() => history.push('/signup')}>here</span>
      </div>
    </div>
  );
}

export default LoginPage;
