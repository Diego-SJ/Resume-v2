import React from 'react';

import './ButtonPrimary.scss';
import Icon from '../Icon';

export default function ButtonPrimary(props) {
  const { loading, type = 'button', content, onClick } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn-primary"
      disabled={loading}
      aria-label="primaryButton"
    >
      {loading && (
        <div className="loading">
          <Icon icon="spinner9" className="loading-icon" />
        </div>
      )}
      <span className={loading ? 'loading-text' : ''}>{content}</span>
    </button>
  );
}
