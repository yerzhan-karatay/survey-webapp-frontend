import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../reducers';

const AccountInfo: React.FC = () => {
  // TODO: add edit form
  const { full_name, email } = useSelector((state: State) => state.stateUser);

  return (
    <div className="account-info container">
      <div className="account-info__item">Your name: <span>{full_name}</span></div>
      <div className="account-info__item">Your email: <span>{email}</span></div>
    </div>
  );
};

export default AccountInfo;