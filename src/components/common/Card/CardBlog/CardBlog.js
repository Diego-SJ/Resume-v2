import React from 'react';
import { Col } from 'react-grid-system';

import './CardBlog.scss';

export default function CardBlog({ item }) {
	return (
		<>
			<Col lg={4} md={6}>
				<div className="blog-card">
					<img
						src={item.thumbnail}
						alt={item.title}
						className="blog-card__thumbnail"
					/>
					<div className="blog-card__info">
						<h3 className="blog-card__title">{item.title}</h3>
						<p className="blog-card__date">{item.date}</p>
						<a href={item.link} target="_blank" rel="noopener noreferrer" className="blog-card__readmore">Read more</a>
					</div>
				</div>
			</Col>
		</>
	);
}
