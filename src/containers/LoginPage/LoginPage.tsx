import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import { fetchPostLoginAction, createPostLoginAction } from '../../actions';
import { Form, InputGroup } from '../../components/Form';
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
    // TODO: move verification process to saga
    if (!email || !password) {
      handleUpdate('error', 'Please fill out all required fields');
    } else {
      dispatch(fetchPostLoginAction.request({ email, password }));
    }
  }

  return (
    <div className="login-page">
      <div className="login-page__greeting">
        Welcome back! Please enter your email and password below.
      </div>
      <Form
        isFetching={isFetching}
        errorMessage={error}
        onSubmit={() => handleSubmit()}
        submitLabel="Login"
        className="login-page__form"
      >
        <InputGroup
          label="Enter your email"
          isRequired={true}
          onChange={(val: string) => handleUpdate('email', val)}
          placeholder="email@email.com"
          type="email"
          name="email"
          value={email}
        />
        <InputGroup
          label="Enter your password"
          isRequired={true}
          onChange={(val: string) => handleUpdate('password', val)}
          placeholder="Your password"
          type="password"
          name="password"
          value={password}
        />
      </Form>
      <div className="login-page__footer">
        Don't have an account? Create an account <span onClick={() => history.push('/signup')}>here</span>
      </div>
    </div>
  );
}

export default LoginPage;
