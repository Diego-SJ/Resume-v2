import React from 'react';
import ImageLoader from '../../components/ImageLoader';

import './Loader.scss';

export default function Loader() {
	return (
		<div className='loader'>
			<ImageLoader />
		</div>
	);
}
