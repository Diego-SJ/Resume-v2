import React from 'react';
import { Col } from 'react-grid-system';
import { PersonalData, Services } from '../../../utils/dbTemp';
import { useTranslation } from 'react-i18next';
import Landing from '../../layouts/Landing';
import ButtonPrimary from '../../common/ButtonPrimary';
import ModalBasic from '../../common/Modal';
import useModal from 'use-react-modal';
import Section from '../../layouts/Section';
import CardService from '../../common/Card/CardService';
import resumeSpanish from '../../../assets/file/Juan Diego Salas Jimenez - es.pdf';
import resumeEnglish from '../../../assets/file/Juan Diego Salas Jimenez - en.pdf';

import './About.scss';
import photo from '../../../assets/img/profile/jdsj2.jpg';

const About = () => {
  const { t } = useTranslation();

  const { isOpen, openModal, closeModal, Modal } = useModal({
    background: 'rgba(0, 0, 0, 0.85)',
    closeOnOutsideClick: true,
    closeOnEsc: true,
  });

  const selectResume = () => {
    const openResume = (lang) => {
      switch (lang) {
        case 'es':
          window.open(resumeSpanish);
          break;
        case 'en':
          window.open(resumeEnglish);
          break;
        default:
          closeModal();
          break;
      }
      closeModal();
    };

    return (
      <div className="resumes">
        <ButtonPrimary
          content={`${t('ABOUT.downloadResume.es')}`}
          onClick={() => openResume('es')}
        />
        <ButtonPrimary
          content={`${t('ABOUT.downloadResume.en')}`}
          onClick={() => openResume('en')}
        />
      </div>
    );
  };

  return (
    <Landing>
      <Section title={'ABOUT.title.2'}>
        <Col lg={6}>
          <div className="section-content__avatar">
            <img src={photo} alt="Juan Diego Salas Jimenez" />
          </div>
        </Col>
        <Col lg={6}>
          <div className="section-content__info">
            <h1 className="secondary">
              <span>{t('ABOUT.iam.1')} </span> Juan Diego Salas Jiménez
            </h1>
            <p className="paragraph">{t('ABOUT.info.1')}</p>
            <ul className="personal-data">
              {PersonalData.map((data) => (
                <li key={data.id} className="personal-data__item">
                  <b>{t(data.title)}</b> {t(data.description)}
                </li>
              ))}
            </ul>
            <ButtonPrimary
              type="button"
              content={`${t('ABOUT.downloadResume.1')}`}
              onClick={openModal}
            />
            <ModalBasic
              isOpen={isOpen}
              closeModal={closeModal}
              Modal={Modal}
              btnClose={false}
              content={selectResume()}
            />
          </div>
        </Col>
      </Section>

      <Section title={'ABOUT.title.3'}>
        {Services.map((service) => (
          <Col
            key={service.id}
            lg={4}
            md={6}
            sm={12}
            style={{ marginBottom: '3rem' }}
          >
            <CardService
              icon={t(service.icon)}
              title={t(service.title)}
              description={t(service.description)}
            />
          </Col>
        ))}
      </Section>
    </Landing>
  );
};

export default About;
