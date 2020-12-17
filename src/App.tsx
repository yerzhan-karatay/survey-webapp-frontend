import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import GeneralWrapper from './containers/GeneralWrapper';
import AccountWrapper from './containers/AccountWrapper';
import SurveyWrapper from './containers/SurveyWrapper';
import WelcomePage from './containers/WelcomePage';
import Footer from './components/Footer';
import history from './history';
import withAuth from './utils/withAuthentication';
import withCommonData from './utils/withCommonData';

const App: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/" component={WelcomePage} />
          <Route exact={true} path="/:page" component={GeneralWrapper} />
          <Route exact={true} path="/account/:page" component={withAuth(AccountWrapper)} />
          <Route exact={true} path="/survey/:page" component={withAuth(SurveyWrapper)} />
          <Route exact={true} path="/survey/:surveyId/:page" component={withAuth(SurveyWrapper)} />
          <Route exact={true} path="/survey/:surveyId/:page/:responseId" component={withAuth(SurveyWrapper)} />
          <Route component={WelcomePage} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default withCommonData(App);
