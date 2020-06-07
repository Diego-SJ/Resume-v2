import React from 'react';
import Icon from '../../components/Icon';

import './Loader.scss';

export default function Loader() {
	return (
		<div className='loader'>
			<Icon icon='spinner9' className='loader-icon' />
			<span>Loading...</span>
		</div>
	);
}
