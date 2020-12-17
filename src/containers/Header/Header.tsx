import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../reducers';
import logo from '../../assets/surveyor.svg';
import { Logout } from '../../utils';
import history from '../../history';

interface HeaderProps {
  children: any,
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { full_name } = useSelector((state: State) => state.stateUser);

  return (
    <div className="global-header">
      <div className="global-header__content container">
        <div className="global-header__content__logo">
          <img onClick={() => history.push('/')} alt="Survey" src={logo} />
          <span>Survey world</span>
        </div>
        <div className="global-header__content__child">
          {children}
        </div>
        <div className="global-header__content__user-block">
          <span className="global-header__content__user-block__name">{full_name}</span>
          <button
            className="global-header__content__user-block__logout btn"
            onClick={() => Logout()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;