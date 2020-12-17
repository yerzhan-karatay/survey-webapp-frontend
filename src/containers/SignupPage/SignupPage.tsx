import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import { fetchPostSignupAction, createPostSignupAction } from '../../actions';
import Spin from '../../components/Spin';
import history from '../../history';

function SignupPage() {
  const { email, password, full_name, isFetching, error } = useSelector((state: State) => state.stateUserSignup);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(createPostSignupAction.clear());
    };
  }, [dispatch]);

  function handleUpdate(key: string, value: string) {
    dispatch(createPostSignupAction.update({ key, value }));
  }

  function handleSubmit() {
    dispatch(fetchPostSignupAction.request({ email, full_name, password }));
  }

  return (
    <div className="signup-page">
      <div className="signup-page__greeting">
        Thanks for joining us! Please enter your email and password below.
      </div>
      <div className="signup-page__form common-form">
        <div className="common-form__group">
          <label className="common-form__group__label common-form__group__label--required">Email</label>
          <input
            required
            className="signup-page__form__item common-form__group__input"
            type="email"
            name="email"
            placeholder="email@email.com"
            onChange={(e) => handleUpdate('email', e.target.value)}
          />
        </div>
        <div className="common-form__group">
          <label className="common-form__group__label common-form__group__label--required">Full name</label>
          <input
            required
            className="signup-page__form__item common-form__group__input"
            type="text"
            name="full_name"
            placeholder="Yerzhan Clark"
            onChange={(e) => handleUpdate('full_name', e.target.value)}
          />
        </div>
        <div className="common-form__group">
          <label className="common-form__group__label common-form__group__label--required">Password</label>
          <input
            required
            className="signup-page__form__item common-form__group__input"
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
          {isFetching ? (<><Spin /> <span className="inline">Loading</span></>) : 'Signup'}
        </button>
      </div>
      <div className="signup-page__footer">
        Already have an account? Go to login page <span onClick={() => history.push('/login')}>here</span>
      </div>
    </div>
  );
}

export default SignupPage;
