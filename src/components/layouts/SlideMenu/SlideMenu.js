import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../../common/ProfilePicture';
import {
  HOME,
  ABOUT,
  RESUME,
  PORTFOLIO,
  CONTACT,
} from '../../../routes/routes';
import { useTranslation } from 'react-i18next';
import Icon from '../../common/Icon';
import { connect } from 'react-redux';
import { showOrHideMenuAction } from '../../../redux/app.duck';

import './SlideMenu.scss';

const SlideMenu = React.memo(
  ({ currentPage, visibility, showOrHideMenuAction }) => {
    const { t } = useTranslation();

    const changeVisibility = () => {
      showOrHideMenuAction();
    };

    return (
      <>
        <aside className={`sidebar ${visibility && 'show'}`}>
          <div className="btn-show-menu" onClick={() => changeVisibility()}>
            <button type="button">
              <Icon icon="align-justify" className="icon" />
            </button>
          </div>
          <div className="header">
            <ProfilePicture />
          </div>
          <ul className="side-bar">
            <li
              className={`side-bar__item  ${
                currentPage === HOME && 'side-bar__item-active'
              }`}
              onClick={changeVisibility}
            >
              <Link to={HOME} className="side-bar__link">
                <Icon icon="home" className="side-bar__icon" />
                <span>{t('HOME.title')}</span>
              </Link>
            </li>
            <li
              className={`side-bar__item  ${
                currentPage === ABOUT && 'side-bar__item-active'
              }`}
              onClick={changeVisibility}
            >
              <Link to={ABOUT} className="side-bar__link">
                <Icon icon="info" className="side-bar__icon" />
                <span>{t('ABOUT.title.1')}</span>
              </Link>
            </li>
            <li
              className={`side-bar__item  ${
                currentPage === RESUME && 'side-bar__item-active'
              }`}
              onClick={changeVisibility}
            >
              <Link to={RESUME} className="side-bar__link">
                <Icon icon="book" className="side-bar__icon" />
                <span>{t('RESUME.title.1')}</span>
              </Link>
            </li>
            <li
              className={`side-bar__item  ${
                currentPage === PORTFOLIO && 'side-bar__item-active'
              }`}
              onClick={changeVisibility}
            >
              <Link to={PORTFOLIO} className="side-bar__link">
                <Icon icon="folder" className="side-bar__icon" />
                <span>{t('PORTFOLIO.title.1')}</span>
              </Link>
            </li>
            <li
              className={`side-bar__item  ${
                currentPage === CONTACT && 'side-bar__item-active'
              }`}
              onClick={changeVisibility}
            >
              <Link to={CONTACT} className="side-bar__link">
                <Icon icon="phone" className="side-bar__icon" />
                <span>{t('CONTACT.title.1')}</span>
              </Link>
            </li>
          </ul>
          <div className="legal">&copy; {t('LEGAL.madeBy')}</div>
        </aside>
      </>
    );
  },
);

const mapStateToProps = ({ app }) => ({
  visibility: app.isShow,
});

export default connect(mapStateToProps, { showOrHideMenuAction })(SlideMenu);
