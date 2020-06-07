import React from 'react';
import { useTranslation } from 'react-i18next';

import './TimeLine.scss';

export default function TimeLine(props) {
	const { list } = props;
	const { t } = useTranslation();

	return (
		<ul className='time-line'>
			{list.map((item) => (
				<li key={item.id} className='time-line__item'>
					<span className='time-line__date'>{t(item.date)}</span>
					<div className='time-line__content'>
						<h3>{t(item.title)}</h3>
						<h4>{t(item.subtitle)}</h4>
						<p>{t(item.description)}</p>
					</div>
				</li>
			))}
		</ul>
	);
}
