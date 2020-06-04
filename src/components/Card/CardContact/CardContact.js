import React from 'react';
import Icon from '../../Icon';

import './CardContact.scss';

export default function CardContact(props) {
	const { icon, title, description } = props;

	return (
		<div className='contact-card'>
			<div className='contact-card__head'>
				<Icon icon={icon} className='contact-card__icon' />
			</div>
			<div className='contact-card__wraper'>
				<h1 className='contact-card__title'>{title}</h1>
				<p className='contact-card__description'>{description}</p>
			</div>
		</div>
	);
}
