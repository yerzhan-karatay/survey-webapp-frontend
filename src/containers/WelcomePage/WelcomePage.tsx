import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../reducers';
import history from '../../history';
import { Logout } from '../../utils';
import Spin from '../../components/Spin';

function WelcomePage() {
  const { full_name, isFetching } = useSelector((state: State) => state.stateUser);

  const nonAuthBlock = (
    <>
      <button
        className="welcome-page__navigation__btn welcome-page__navigation__btn--login btn"
        onClick={() => history.push('/login')}>Login</button>
      <button
        className="welcome-page__navigation__btn welcome-page__navigation__btn--signup btn"
        onClick={() => history.push('/signup')}>Signup</button>
    </>
  );

  const userBlock = (
    <>
      <button className="welcome-page__navigation__btn btn" onClick={() => history.push('/account/my')}>
        My account
      </button>
      <button className="welcome-page__navigation__btn btn" onClick={() => history.push('/account/survey')}>
        My surveys
      </button>
      <button className="welcome-page__navigation__btn btn" onClick={() => history.push('/account/response')}>
        My responses
      </button>
      <button
        className="welcome-page__navigation__btn welcome-page__navigation__btn--logout btn"
        onClick={() => Logout()}
      >
        Logout
      </button>
    </>
  );

  return (
    <div className="welcome-page container">
      {isFetching ? <Spin size="lg" className="mx-auto my-10" /> : (
        <>
          <div className="welcome-page__greeting">
            Welcome to the Survey world{full_name && `, ${full_name}`}!
          </div>
          <div className="welcome-page__navigation">
            {!full_name ? nonAuthBlock : userBlock}
          </div>
        </>
      )}
    </div>
  );
}

export default WelcomePage;
