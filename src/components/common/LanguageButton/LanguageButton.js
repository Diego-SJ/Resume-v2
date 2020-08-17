import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './LanguageButton.scss';
import es from '../../../assets/img/language/es.png';
import en from '../../../assets/img/language/en.png';

export default function LanguageButton() {
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();

  const onClick = () => {
    let len = language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(len);
    setLanguage(len);
  };

  return (
    <button className="language" onClick={onClick}>
      <div style={{ backgroundImage: `url(${language === 'en' ? es : en})` }} />
      <span>{language === 'en' ? 'Spanish' : 'English'}</span>
    </button>
  );
}
