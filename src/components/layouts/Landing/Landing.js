import React from 'react';
import { useDispatch } from 'react-redux';
import { onlyHideMenuAction } from '../../../redux/app.duck';

import './Landing.scss';

const Landing = ({ children }) => {
  const dispatch = useDispatch();

  const handleMenuVisibility = () => {
    dispatch(onlyHideMenuAction());
  };

  return (
    <main onClick={handleMenuVisibility} className="landing">
      {children}
    </main>
  );
};

export default Landing;
