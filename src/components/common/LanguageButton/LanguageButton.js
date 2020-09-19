import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { switchLanguageAction } from '../../../redux/app.duck';

import { LAN_EN, SPANISH, ENGLISH } from '../../../constants/strings';

import './LanguageButton.scss';
import es from '../../../assets/img/language/es.webp';
import en from '../../../assets/img/language/en.webp';

export default function LanguageButton() {
  const { i18n } = useTranslation();
  const currentLanguage = useSelector(({ app }) => app.language)
  const dispatch = useDispatch();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const onClick = async () => {
    await dispatch(switchLanguageAction());
  };

  return (
    <button className="language" onClick={onClick}>
      <div style={{ backgroundImage: `url(${currentLanguage === LAN_EN ? es : en})` }} />
      <span>{currentLanguage === LAN_EN ? SPANISH : ENGLISH}</span>
    </button>
  );
}
