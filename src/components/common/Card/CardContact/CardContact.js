import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../Icon';

import './CardContact.scss';

export default function CardContact(props) {
  const { icon, title, description } = props;
  const { t } = useTranslation();

  return (
    <div className="contact-card">
      <div className="contact-card__head">
        <Icon icon={icon} className="contact-card__icon" />
      </div>
      <div className="contact-card__wraper">
        <h1 className="contact-card__title">{t(title)}</h1>
        <p className="contact-card__description">{t(description)}</p>
      </div>
    </div>
  );
}
