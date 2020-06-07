import React from 'react';
import { PORTFOLIO } from '../../routes/routes';
import { Row } from 'react-grid-system';
import { PortfolioInfo } from '../../utils/dbTemp';
import SlideMenu from '../../layouts/SlideMenu';
import Section from '../../layouts/Section';
import TitleSection from '../../components/Text/TitleSection';
import CardPortfolio from '../../components/Card/CardPortfolio';
import './Portfolio.scss';

export default function Portfolio() {
	return (
		<>
			<SlideMenu currentPage={PORTFOLIO} />
			<div className='landing'>
				<Section
					content={
						<>
							<TitleSection title='PORTFOLIO.title.1' />
							<Row>
								{PortfolioInfo.map((item) => (
									<CardPortfolio
										key={item.id}
										image={item.image}
										title={item.title}
										description={item.description}
										link={item.link !== null ? item.link : null}
									/>
								))}
							</Row>
						</>
					}
				/>
			</div>
		</>
	);
}
