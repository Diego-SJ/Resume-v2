import React from 'react';
import Icon from '../../common/Icon';

import './Loader.scss';

export default function Loader() {
  return (
    <div className="loader">
      <Icon icon="spinner9" className="loader-icon" />
    </div>
  );
}
