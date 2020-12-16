import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import GeneralWrapper from './containers/GeneralWrapper';
import AccountWrapper from './containers/AccountWrapper';
import SurveyWrapper from './containers/SurveyWrapper';
import history from './history';
import withAuth from './utils/withAuthentication';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/:page" component={GeneralWrapper} />
        <Route exact={true} path="/account/:page" component={withAuth(AccountWrapper)} />
        <Route exact={true} path="/survey/:page" component={withAuth(SurveyWrapper)} />
        <Route exact={true} path="/survey/:surveyId/:subPage" component={withAuth(SurveyWrapper)} />
        <Route exact={true} path="/survey/:surveyId/:subPage/:responseId" component={withAuth(SurveyWrapper)} />
      </Switch>
    </Router>
  );
};

export default App;
