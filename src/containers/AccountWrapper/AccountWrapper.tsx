import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  page_type: string;
  page_function: string;
}

interface AccountWrapperProps extends RouteComponentProps<MatchParams> {
}
const AccountWrapper: React.FC<AccountWrapperProps> = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch]);
  // profile, surveys, responses
  const page_type = match.params.page_type;
  let content;
  switch (page_type) {
    case 'users':
      content = <div>content</div>;
      break;
    default:
      content = 'page';
      break;
  }

  return (
    <main className="wrapper">
      <section className="wrapper__header">
        AccountWrapper  header
      </section>
      <section className="wrapper__content">{content}</section>
    </main>
  );
};

export default withRouter(AccountWrapper);