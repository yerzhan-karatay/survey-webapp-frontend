import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import { SurveyCreate, SurveyDetail, SurveyEdit } from '../Survey';
import { ResponseCreate, ResponseDetail } from '../Reponse';
import history from '../../history';
import Header from '../Header';

interface MatchParams {
  page: string;
  surveyId?: string;
  responseId?: string;
}
interface SurveyWrapperProps extends RouteComponentProps<MatchParams> {
}
const SurveyWrapper: React.FC<SurveyWrapperProps> = ({ match }) => {
  const page = match.params.page;
  const surveyId = match.params.surveyId;
  const responseId = match.params.responseId;
  console.log(match.params);
  let content;
  // new, :surveyId/detail, :surveyId/edit, :surveyId/reply, :surveyId/response/:responseId
  switch (page) {
    case 'new':
      content = <SurveyCreate />;
      break;
    case 'detail':
      if (!surveyId) return <WelcomePage />;
      content = <SurveyDetail surveyId={parseInt(surveyId)} />;
      break;
    case 'edit':
      if (!surveyId) return <WelcomePage />;
      content = <SurveyEdit surveyId={parseInt(surveyId)} />;
      break;
    case 'reply':
      if (!surveyId) return <WelcomePage />;
      content = <ResponseCreate />;
      break;
    case 'response':
      if (!surveyId) return <WelcomePage />;
      if (!responseId) return <WelcomePage />;
      content = <ResponseDetail />;
      break;
    default:
      return <WelcomePage />;
  }

  return (
    <main className="account-wrapper">
      <Header>
        <button
          className="btn btn--default mr-5"
          onClick={() => history.push('/account/my')}
        >
          My account
        </button>
        <button
          className="btn btn--default mr-5"
          onClick={() => history.push('/account/survey')}
        >
          My surveys
        </button>
        <button
          className="btn btn--default"
          onClick={() => history.push('/account/response')}
        >
          My responses
        </button>
      </Header>
      <section className="account-wrapper__content container">{content}</section>
    </main>
  );
};

export default withRouter(SurveyWrapper);