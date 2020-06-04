import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';
import { ABOUT } from '../../routes/routes';
import { PersonalData, Services } from '../../utils/dbTemp';
import SlideMenu from '../../layouts/SlideMenu';
import Section from '../../layouts/Section';
import CardService from '../../components/Card/CardService';
import TitleSection from '../../components/Text/TitleSection';
import urlResume from '../../assets/file/Juan Diego Salas Jimenez.pdf';

import './About.scss';
import photo from '../../assets/img/profile/jdsj2.jpg';

export default function About() {
	return (
		<>
			<SlideMenu currentPage={ABOUT} />
			<div className='landing'>
				<Section
					content={
						<>
							<TitleSection title='About me' />
							<Row>
								<Col lg={6}>
									<div className='section-content__avatar'>
										<img src={photo} alt='Juan Diego Salas Jimenez' />
									</div>
								</Col>
								<Col lg={6}>
									<div className='section-content__info'>
										<h1 className='secondary'>
											<span>I am </span> Juan Diego Salas Jiménez
										</h1>
										<p className='paragraph'>
											Engineering student in Information Technology and Communications.
										</p>
										<ul className='personal-data'>
											{PersonalData.map((data) => (
												<li key={data.id} className='personal-data__item'>
													<b>{data.title}</b> {data.description}
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
											Download resume
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
							<TitleSection title='Services' />
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
											icon={service.icon}
											title={service.title}
											description={service.description}
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
