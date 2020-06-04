import React from 'react';
import { CONTACT } from '../../routes/routes';
import { Row, Col } from 'react-grid-system';
import { ContactInfo } from '../../utils/dbTemp';
import SlideMenu from '../../layouts/SlideMenu';
import Section from '../../layouts/Section';
import TitleSection from '../../components/Text/TitleSection';
import ContactForm from '../../components/ContactForm';
import CardContact from '../../components/Card/CardContact';

export default function Contact() {
	return (
		<>
			<SlideMenu currentPage={CONTACT} />
			<div className='landing'>
				<Section
					content={
						<>
							<TitleSection title='Contact me' />
							<Row>
								<Col lg={6} md={6} sm={12}>
									<ContactForm />
								</Col>
								<Col lg={6} md={6} sm={12} className='contact-info'>
									{ContactInfo.map((item) => (
										<CardContact
											key={item.id}
											icon={item.icon}
											title={item.title}
											description={item.description}
										/>
									))}
								</Col>
							</Row>
						</>
					}
				/>
			</div>
		</>
	);
}
