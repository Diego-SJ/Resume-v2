import React from 'react';
import { Row, Col } from 'react-grid-system';

import './TitleSection.scss';

export default function TitleSection(props) {
	const { title } = props;

	return (
		<Row>
			<Col md={12}>
				<div className='title-section'>
					<h1 className='heading-primary'>{title}</h1>
				</div>
			</Col>
		</Row>
	);
}
