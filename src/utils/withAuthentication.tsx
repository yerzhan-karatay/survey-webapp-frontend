import React from 'react';
import conf from '../config';
import history from "../history";

function withAuth<T>(WrappedComponent: React.ComponentType<T>) {
  // TODO: add redirect to access forbidden 403 page
  return (props: T) => {
    if (!localStorage.getItem(conf.TOKEN)) {
      history.push("/login");
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;