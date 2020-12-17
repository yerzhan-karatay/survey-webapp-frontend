import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import './GeneralWrapper.css';
import WelcomePage from '../WelcomePage';
import LoginPage from '../LoginPage';
import SignupPage from '../SignupPage';
import logo from '../../assets/surveyor.svg';
import { Logout } from '../../utils';
import history from '../../history';
interface MatchParams {
  page: string;
}
interface GeneralWrapperProps extends RouteComponentProps<MatchParams> {
}
const GeneralWrapper: React.FC<GeneralWrapperProps> = ({ match }) => {
  const page = match.params.page;
  let title = '';
  let content;
  switch (page) {
    case 'login':
      content = <LoginPage />;
      title = 'Authorization';
      break;
    case 'signup':
      content = <SignupPage />;
      title = 'Registration';
      break;
    case 'logout':
      Logout();
      break;
    default:
      return <WelcomePage />;
  }

  return (
    <main className="general-wrapper container">
      <section className="general-wrapper__header">
        <img onClick={() => history.push('/')} alt="Survey" src={logo} className="general-wrapper__header__logo" />
        <div className="general-wrapper__header__title">
          Survey world - {title}
        </div>
      </section>
      <section className="general-wrapper__content">{content}</section>
    </main>
  );
};

export default withRouter(GeneralWrapper);