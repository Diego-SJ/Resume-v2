import React from 'react';
import { connect } from 'react-redux';
import { onlyHideMenuAction } from '../../../redux/app.duck';

import './Landing.scss';

const Landing = ({ children, onlyHideMenuAction }) => {
  const handleMenuVisibility = () => {
    onlyHideMenuAction();
  };

  return (
    <main onClick={handleMenuVisibility} className="landing">
      {children}
    </main>
  );
};

const mapState = () => ({
  visibility: {},
});

export default connect(mapState, { onlyHideMenuAction })(Landing);
