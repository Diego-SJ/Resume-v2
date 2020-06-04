import React from 'react';
// import map from 'lodash';

import './TimeLine.scss';

export default function TimeLine(props) {
	const { list } = props;

	return (
		<ul className='time-line'>
			{/* {map(list, (item) => (
				<li key={item.id} className='time-line__item'>
					<span className='time-line__date'>{item.date}</span>
					<div className='time-line__content'>
						<h3>{item.title}</h3>
						<h4>{item.description}</h4>
						<p>{item.place}</p>
					</div>
				</li>
			))} */}
			{list.map((item) => (
				<li key={item.id} className='time-line__item'>
					<span className='time-line__date'>{item.date}</span>
					<div className='time-line__content'>
						<h3>{item.title}</h3>
						<h4>{item.subtitle}</h4>
						<p>{item.description}</p>
					</div>
				</li>
			))}
		</ul>
	);
}
