import React from 'react';
import Icon from '../../Icon';

import './CardService.scss';

export default function CardService(props) {
	const { icon, title, description } = props;
	return (
		<div className='service-card'>
			<Icon icon={icon} className='service-card__icon' />
			<h1 className='service-card__title'>{title}</h1>
			<p className='service-card__description'>{description}</p>
		</div>
	);
}
