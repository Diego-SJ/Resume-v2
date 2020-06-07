import React, { useState } from 'react';
import { Col } from 'react-grid-system';
import { useTranslation } from 'react-i18next';
import ImageLoader from '../../ImageLoader';
import ModalBasic from '../../Modal';
import useModal from 'use-react-modal';
import Icon from '../../Icon';

import './CardPortfolio.scss';

export default function CardPortfolio(props) {
	const { image = null, title, description, link = null } = props;
	const { t } = useTranslation();

	const [isImageLoaded, setIsImageLoaded] = useState(false);

	const { isOpen, openModal, closeModal, Modal } = useModal({
		background: 'rgba(0, 0, 0, 0.8)',
		closeOnOutsideClick: true,
		closeOnEsc: true,
	});

	return (
		<>
			<Col lg={4} sm={12} md={6}>
				<div className='portfolios-card'>
					<div className='portfolios-card__head'>
						<div className='portfolios-card__image'>
							<img
								src={image}
								className='d-none'
								onLoad={() => setTimeout(() => setIsImageLoaded(true), 3000)}
								alt='hidden-img'
							/>
							{isImageLoaded && (
								<div
									className='portfolios-card__image-div'
									style={{ backgroundImage: `url(${image})` }}
								/>
							)}
							{!isImageLoaded && <ImageLoader />}
						</div>
						<div className='portfolios-card__hide'>
							{image && (
								<button onClick={openModal} className='portfolios-card__options'>
									<Icon icon='eye' className='portfolios-card__options-icon' />
								</button>
							)}
							{link && (
								<a
									href={link}
									target='_blank'
									without={`true`}
									rel='noopener noreferrer'
									className='portfolios-card__options'
								>
									<Icon icon='external-link' className='portfolios-card__options-icon' />
								</a>
							)}
						</div>
					</div>
					<div className='portfolios-card__wraper'>
						<div className='portfolios-card__title'>
							<a
								href={link}
								target='_blank'
								without={`true`}
								rel='noopener noreferrer'
							>
								{t(title)}
							</a>
						</div>
						<div className='portfolios-card__description'>
							<p>{t(description)}</p>
						</div>
					</div>
				</div>
			</Col>
			<ModalBasic
				isOpen={isOpen}
				closeModal={closeModal}
				Modal={Modal}
				content={<img src={image} alt={title} className='modal__image' />}
			/>
		</>
	);
}
