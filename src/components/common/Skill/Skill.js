import React from 'react';
import { Col } from 'react-grid-system';

import './Skill.scss';

export default function Skill({ title, percentage }) {
  return (
    <>
      <Col lg={4} md={6}>
        <div className="skill">
          <h6 className="skill__title">{title}</h6>
          <div className="skill__inner">
            <div className="skill__percentage">{`${percentage}%`}</div>
            <div className="skill__container">
              <span
                className="skill-active"
                style={{ width: `${percentage}%` }}
              ></span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
