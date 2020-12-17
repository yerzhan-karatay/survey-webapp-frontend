import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import AccountInfo from '../AccountInfo';
import ResponseList from '../ResponseList';
import SurveyList from '../SurveyList';
import history from '../../history';
import Header from '../Header';

interface MatchParams {
  page: string;
}
interface AccountWrapperProps extends RouteComponentProps<MatchParams> {
}
const AccountWrapper: React.FC<AccountWrapperProps> = ({ match }) => {
  const page = match.params.page;
  let content;
  switch (page) {
    case 'my':
      content = <AccountInfo />;
      break;
    case 'survey':
      content = <SurveyList />;
      break;
    case 'response':
      content = <ResponseList />;
      break;
    default:
      return <WelcomePage />;
  }

  return (
    <main className="account-wrapper">
      <Header>
        <button
          className="btn btn--default mr-5"
          disabled={page === 'my'}
          onClick={() => history.push('/account/my')}
        >
          My account
        </button>
        <button
          className="btn btn--default mr-5"
          disabled={page === 'survey'}
          onClick={() => history.push('/account/survey')}
        >
          My surveys
        </button>
        <button
          className="btn btn--default"
          disabled={page === 'response'}
          onClick={() => history.push('/account/response')}
        >
          My responses
        </button>
      </Header>
      <section className="account-wrapper__content container">{content}</section>
    </main>
  );
};

export default withRouter(AccountWrapper);