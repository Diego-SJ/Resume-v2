import React, { useEffect } from 'react';
import Landing from '../../layouts/Landing';
import Section from '../../layouts/Section';
import CardBlog from '../../common/Card/CardBlog';

import { useDispatch, useSelector } from 'react-redux';
import { fetchMediumHistories } from '../../../redux/app.duck';

import './Blog.scss';

const Resume = () => {
	const dispatch = useDispatch();
	const { fetching, blog } = useSelector(({ app }) => app);

	useEffect(() => {
		dispatch(fetchMediumHistories());
	}, [dispatch]);

	return (
		<Landing>
			<Section title="Blog">
				{!fetching && blog.map((history, index) => <CardBlog key={index} item={history} />)}
			</Section>
		</Landing>
	);
};

export default Resume;
