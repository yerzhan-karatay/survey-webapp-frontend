import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers';
import { fetchPostSignupAction, createPostSignupAction } from '../../actions';
import { Form, InputGroup } from '../../components/Form';
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
    // TODO: move verification process to saga
    if (!email || !password || !full_name) {
      handleUpdate('error', 'Please fill out all required fields');
    } else {
      dispatch(fetchPostSignupAction.request({ email, full_name, password }));
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-page__greeting">
        Thanks for joining us! Please enter your email and password below.
      </div>
      <Form
        isFetching={isFetching}
        errorMessage={error}
        onSubmit={() => handleSubmit()}
        submitLabel="Signup"
        className="signup-page__form"
      >
        <InputGroup
          label="Enter your email"
          isRequired={true}
          onChange={(val: string) => handleUpdate('email', val)}
          placeholder="email@email.com"
          type="email"
          name="email"
        />
        <InputGroup
          label="Enter your full name"
          isRequired={true}
          onChange={(val: string) => handleUpdate('full_name', val)}
          placeholder="Yerzhan Clark"
          type="text"
          name="full_name"
        />
        <InputGroup
          label="Enter your password"
          isRequired={true}
          onChange={(val: string) => handleUpdate('password', val)}
          placeholder="Your password"
          type="password"
          name="password"
        />
      </Form>
      <div className="signup-page__footer">
        Already have an account? Go to login page <span onClick={() => history.push('/login')}>here</span>
      </div>
    </div>
  );
}

export default SignupPage;
