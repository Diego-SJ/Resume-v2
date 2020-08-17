import React from 'react';
import { Row, Col } from 'react-grid-system';
import { useTranslation } from 'react-i18next';

import './TitleSection.scss';

export default function TitleSection({ title }) {
  const { t } = useTranslation();

  return (
    <Row>
      <Col md={12}>
        <div className="title-section">
          <h1 className="heading-primary">{t(title)}</h1>
        </div>
      </Col>
    </Row>
  );
}
