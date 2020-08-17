import React from 'react';
import { Col } from 'react-grid-system';
import { ContactInfo } from '../../../utils/dbTemp';
import Section from '../../layouts/Section';
import ContactForm from '../../common/ContactForm';
import CardContact from '../../common/Card/CardContact';

import './Contact.scss';

export default function Contact() {
  return (
    <>
      <main className="landing">
        <Section title="CONTACT.title.1">
          <Col lg={6} md={6} sm={12}>
            <ContactForm />
          </Col>
          <Col lg={6} md={6} sm={12} className="contact-info">
            {ContactInfo.map((item) => (
              <CardContact
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </Col>
        </Section>
      </main>
    </>
  );
}
