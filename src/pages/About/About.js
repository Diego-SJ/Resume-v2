import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';
import { ABOUT } from '../../routes/routes';
import { PersonalData, Services } from '../../utils/dbTemp';
import { useTranslation } from 'react-i18next';
import SlideMenu from '../../layouts/SlideMenu';
import Section from '../../layouts/Section';
import CardService from '../../components/Card/CardService';
import TitleSection from '../../components/Text/TitleSection';
import urlResume from '../../assets/file/Juan Diego Salas Jimenez.pdf';

import './About.scss';
import photo from '../../assets/img/profile/jdsj2.jpg';

export default function About() {
	const { t } = useTranslation();
	return (
		<>
			<SlideMenu currentPage={ABOUT} />
			<div className='landing'>
				<Section
					content={
						<>
							<TitleSection title={'ABOUT.title.2'} />
							<Row>
								<Col lg={6}>
									<div className='section-content__avatar'>
										<img src={photo} alt='Juan Diego Salas Jimenez' />
									</div>
								</Col>
								<Col lg={6}>
									<div className='section-content__info'>
										<h1 className='secondary'>
											<span>{t('ABOUT.iam.1')} </span> Juan Diego Salas Jiménez
										</h1>
										<p className='paragraph'>{t('ABOUT.info.1')}</p>
										<ul className='personal-data'>
											{PersonalData.map((data) => (
												<li key={data.id} className='personal-data__item'>
													<b>{t(data.title)}</b> {t(data.description)}
												</li>
											))}
										</ul>
										<Link
											to='!#'
											className='btn-primary'
											onClick={(event) => {
												event.preventDefault();
												window.open(urlResume);
											}}
										>
											{t('ABOUT.downloadResume.1')}
										</Link>
									</div>
								</Col>
							</Row>
						</>
					}
				/>

				<Section
					content={
						<>
							<TitleSection title={'ABOUT.title.3'} />
							<Row>
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
							</Row>
						</>
					}
				/>
			</div>
		</>
	);
}
