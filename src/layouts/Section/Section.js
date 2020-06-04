import React from 'react';
import { Container } from 'react-grid-system';

import './Section.scss';

export default function Section(props) {
	const { content } = props;

	return (
		<>
			<section className='section'>
				<Container fliud={'true'} style={{ width: '100%' }}>
					{content}
				</Container>
			</section>
		</>
	);
}
