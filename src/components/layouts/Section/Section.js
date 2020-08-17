import React from 'react';
import TitleSection from '../../common/TitleSection';
import { Container, Row } from 'react-grid-system';

import './Section.scss';

export default function Section({ children, title }) {
  return (
    <>
      <section className="section">
        <Container fliud={'true'} style={{ width: '100%' }}>
          {title && <TitleSection title={title} />}
          <Row>{children}</Row>
        </Container>
      </section>
    </>
  );
}
