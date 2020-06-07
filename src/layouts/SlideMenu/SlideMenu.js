import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOME, ABOUT, RESUME, PORTFOLIO, CONTACT } from '../../routes/routes';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/Icon';

import './SlideMenu.scss';
import photo from '../../assets/img/profile/jdsj.png';

export default function SlideMenu(props) {
	const { currentPage } = props;
	const { t } = useTranslation();

	const [visibility, setVisibility] = useState(null);

	const changeVisibility = () => {
		console.log('click siedbar');
		if (visibility) {
			setVisibility(false);
		} else {
			setVisibility(true);
		}
	};

	return (
		<>
			<nav className={`sidebar ${visibility ? 'show' : ''}`}>
				<div className='btn-show-menu' onClick={() => changeVisibility()}>
					<button type='button'>
						<Icon icon='align-justify' className='icon' />
					</button>
				</div>
				<div className='header'>
					<Link to={HOME} className='header__user'>
						<img
							src={photo}
							alt='Juan Diego Salas Jimenez'
							className={`header__photo`}
						/>
					</Link>
				</div>
				<ul className='side-bar'>
					<li
						className={`side-bar__item  ${
							currentPage === HOME ? 'side-bar__item-active' : ''
						}`}
					>
						<Link to={HOME} className='side-bar__link'>
							<Icon icon='home' className='side-bar__icon' />
							<span>{t('HOME.title')}</span>
						</Link>
					</li>
					<li
						className={`side-bar__item  ${
							currentPage === ABOUT ? 'side-bar__item-active' : ''
						}`}
					>
						<Link to={ABOUT} className='side-bar__link'>
							<Icon icon='info' className='side-bar__icon' />
							<span>{t('ABOUT.title.1')}</span>
						</Link>
					</li>
					<li
						className={`side-bar__item  ${
							currentPage === RESUME ? 'side-bar__item-active' : ''
						}`}
					>
						<Link to={RESUME} className='side-bar__link'>
							<Icon icon='book' className='side-bar__icon' />
							<span>{t('RESUME.title.1')}</span>
						</Link>
					</li>
					<li
						className={`side-bar__item  ${
							currentPage === PORTFOLIO ? 'side-bar__item-active' : ''
						}`}
					>
						<Link to={PORTFOLIO} className='side-bar__link'>
							<Icon icon='folder' className='side-bar__icon' />
							<span>{t('PORTFOLIO.title.1')}</span>
						</Link>
					</li>
					<li
						className={`side-bar__item  ${
							currentPage === CONTACT ? 'side-bar__item-active' : ''
						}`}
					>
						<Link to={CONTACT} className='side-bar__link'>
							<Icon icon='phone' className='side-bar__icon' />
							<span>{t('CONTACT.title.1')}</span>
						</Link>
					</li>
				</ul>
				<div className='legal'>&copy; {t('LEGAL.madeBy')}</div>
			</nav>
		</>
	);
}
