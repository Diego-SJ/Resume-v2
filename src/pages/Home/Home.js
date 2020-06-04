import React from 'react';
import { Link } from 'react-router-dom';
import SlideMenu from '../../layouts/SlideMenu';
import Icon from '../../components/Icon';
import { CONTACT, LINKEDIN, GITHUB, HOME } from '../../routes/routes';

import './Home.scss';
import videoParticles from '../../assets/video/particles.mp4';
import videoParticlesWeb from '../../assets/video/particles.mp4';

export default function Home() {
	const { phone } = ['+527714152997'];
	return (
		<>
			<SlideMenu currentPage={HOME} />
			<div className='landing-home'>
				<div className='bg-video'>
					<video className='bg-video__content' autoPlay muted loop>
						<source src={videoParticles} type='video/mp4' />
						<source src={videoParticlesWeb} type='video/webm' />
						Your browser is not supported!
					</video>
				</div>
				<div className='welcome-message'>
					<h1 className='primary'>
						<span>Hi! I am </span> Juan Diego Salas Jiménez
					</h1>
					<div className='welcome-message__secondary'>
						<p className='paragraph'>
							Being part of a company where I can put into practice all my knowledge,
							to give me the opportunity to reach all my goals set, and that offers me
							the opportunity to grow in the area work, personal and intellectual.
						</p>
					</div>
					<div className='welcome-message__social'>
						<ul className='social'>
							<li className='social-item'>
								<Link to={CONTACT} className='social-item__content'>
									<Icon icon='at-sign' className='social-item__icon' />
								</Link>
							</li>
							<li className='social-item'>
								<a
									href={`tel:${phone}`}
									className='social-item__content'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Icon icon='phone' className='social-item__icon' />
								</a>
							</li>
							<li className='social-item'>
								<a
									href={LINKEDIN}
									className='social-item__content'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Icon icon='linkedin' className='social-item__icon' />
								</a>
							</li>
							<li className='social-item'>
								<a
									href={GITHUB}
									className='social-item__content'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Icon icon='github' className='social-item__icon' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
