import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { State } from '../reducers';
import { fetchGetUserAction } from '../actions';
import conf from '../config';

function withCommonData<T>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    const dispatch = useDispatch();
    const { full_name } = useSelector((state: State) => state.stateUser);
    const token = localStorage.getItem(conf.TOKEN);

    useEffect(() => {
      function fetchUser() {
        dispatch(fetchGetUserAction.request());
      }

      if (token && !full_name) {
        fetchUser();
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, full_name]);

    return <WrappedComponent {...props} />;
  };
}

export default withCommonData;