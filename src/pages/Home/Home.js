import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, LINKEDIN, GITHUB, HOME } from '../../routes/routes';
import { useTranslation } from 'react-i18next';
import ParticlesBg from 'particles-bg';
import SlideMenu from '../../layouts/SlideMenu';
import Icon from '../../components/Icon';

import './Home.scss';

export default function Home() {
  const { t } = useTranslation();
  const phone = '+527714152997';
  return (
    <>
      <SlideMenu currentPage={HOME} />
      <div className="landing-home">
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
                <Link to={CONTACT} className="social-item__content">
                  <Icon icon="at-sign" className="social-item__icon" />
                </Link>
              </li>
              <li className="social-item">
                <a
                  href={`tel:${phone}`}
                  className="social-item__content"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="phone" className="social-item__icon" />
                </a>
              </li>
              <li className="social-item">
                <a
                  href={`https://api.whatsapp.com/send?phone=${phone}`}
                  className="social-item__content"
                  target="_blank"
                  rel="noopener noreferrer"
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
                >
                  <Icon icon="linkedin" className="social-item__icon" />
                </a>
              </li>
              <li className="social-item">
                <a
                  href={`https://medium.com/@diegosj`}
                  className="social-item__content"
                  target="_blank"
                  rel="noopener noreferrer"
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
                >
                  <Icon icon="github" className="social-item__icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ParticlesBg type="lines" bg={true} />
      </div>
    </>
  );
}
