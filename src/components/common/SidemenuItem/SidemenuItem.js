import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { showOrHideMenuAction } from '../../../redux/app.duck';
import Icon from '../Icon';

import './SidemenuItem.scss';

const SidemenuItem = ({ url, icon, title }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const changeVisibility = () => {
    dispatch(showOrHideMenuAction());
  };

  return (
    <li
      className={`side-bar__item  ${
        pathname === url && 'side-bar__item-active'
      }`}
      onClick={changeVisibility}
    >
      <Link to={url} className="side-bar__link">
        <Icon icon={icon} className="side-bar__icon" />
        <span>{t(title)}</span>
      </Link>
    </li>
  );
};

export default SidemenuItem;
