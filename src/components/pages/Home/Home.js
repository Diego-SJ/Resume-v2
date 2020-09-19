import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onlyHideMenuAction } from '../../../redux/app.duck';
import { CONTACT } from '../../../routes/routes';
import {
  LINKEDIN,
  GITHUB,
  PHONE,
  MEDIUM,
  WHATSAPP,
} from '../../../constants/social';
import { useTranslation } from 'react-i18next';
import ParticlesBg from 'particles-bg';
import Icon from '../../common/Icon';

import './Home.scss';

const Home = ({ onlyHideMenuAction }) => {
  const { t } = useTranslation();

  const handleMenuVisibility = () => {
    onlyHideMenuAction();
  };

  return (
    <main onClick={handleMenuVisibility} className="landing-home">
      <div className="welcome-message">
        <h1 className="primary">
          <span>{t('HOME.hiIam.1')} </span> Juan Diego Salas Jiménez
        </h1>
        <div className="welcome-message__secondary">
          <p className="paragraph">{t('HOME.objetive.1')}</p>
        </div>
        <div className="welcome-message__social">
          <ul className="social">
            <li className="social-item">
              <Link to={CONTACT} className="social-item__content" aria-label="contact">
                <Icon icon="at-sign" className="social-item__icon" />
              </Link>
            </li>
            <li className="social-item">
              <a
                href={`tel:${PHONE}`}
                className="social-item__content"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="phone"
              >
                <Icon icon="phone" className="social-item__icon" />
              </a>
            </li>
            <li className="social-item">
              <a
                href={WHATSAPP}
                className="social-item__content"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="whatsapp"
              >
                <Icon icon="whatsapp" className="social-item__icon" />
              </a>
            </li>
            <li className="social-item">
              <a
                href={LINKEDIN}
                className="social-item__content"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <Icon icon="linkedin" className="social-item__icon" />
              </a>
            </li>
            <li className="social-item">
              <a
                href={MEDIUM}
                className="social-item__content"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="medium"
              >
                <Icon icon="medium" className="social-item__icon" />
              </a>
            </li>
            <li className="social-item">
              <a
                href={GITHUB}
                className="social-item__content"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <Icon icon="github" className="social-item__icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ParticlesBg type="lines" bg={true} />
    </main>
  );
};

const mapState = () => ({
  app: {},
});

export default connect(mapState, { onlyHideMenuAction })(Home);
