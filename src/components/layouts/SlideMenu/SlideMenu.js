import React from 'react';
import ProfilePicture from '../../common/ProfilePicture';
import SidemenuItem from '../../common/SidemenuItem';
import {
  HOME,
  ABOUT,
  RESUME,
  PORTFOLIO,
  CONTACT,
} from '../../../routes/routes';
import { useTranslation } from 'react-i18next';
import Icon from '../../common/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { showOrHideMenuAction } from '../../../redux/app.duck';

import './SlideMenu.scss';

const SlideMenu = React.memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const visibility = useSelector(({ app }) => app.isShow);

  const changeVisibility = () => {
    dispatch(showOrHideMenuAction());
  };

  return (
    <>
      <aside className={`sidebar ${visibility && 'show'}`}>
        <div className="btn-show-menu" onClick={() => changeVisibility()}>
          <button type="button" aria-label="closeOpenButton">
            <Icon icon="align-justify" className="icon" />
          </button>
        </div>
        <div className="header">
          <ProfilePicture />
        </div>
        <ul className="side-bar">
          <SidemenuItem url={HOME} icon="home" title="HOME.title" />
          <SidemenuItem url={ABOUT} icon="info" title="ABOUT.title.1" />
          <SidemenuItem url={RESUME} icon="book" title="RESUME.title.1" />
          <SidemenuItem
            url={PORTFOLIO}
            icon="folder"
            title="PORTFOLIO.title.1"
          />
          <SidemenuItem url={CONTACT} icon="phone" title="CONTACT.title.1" />
        </ul>
        <div className="legal">&copy; {t('LEGAL.madeBy')}</div>
      </aside>
    </>
  );
});

export default SlideMenu;
