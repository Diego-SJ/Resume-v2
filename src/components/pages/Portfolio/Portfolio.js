import React from 'react';
import { PortfolioInfo } from '../../../utils/dbTemp';
import Landing from '../../layouts/Landing';
import Section from '../../layouts/Section';
import CardPortfolio from '../../common/Card/CardPortfolio';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <Landing>
      <Section title="PORTFOLIO.title.1">
        {PortfolioInfo.map((item) => (
          <CardPortfolio
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link !== null ? item.link : null}
          />
        ))}
      </Section>
    </Landing>
  );
};

export default Portfolio;
