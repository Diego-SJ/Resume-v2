import React from 'react';
import { Row } from 'react-grid-system';
import { RESUME } from '../../routes/routes';
import {
	Skills,
	Education,
	ProfessionalExperience,
	Recognitions,
} from '../../utils/dbTemp';
import SlideMenu from '../../layouts/SlideMenu';
import Section from '../../layouts/Section';
import TitleSection from '../../components/Text/TitleSection';
import Skill from '../../components/Resume/Skill';
import TimeLine from '../../components/Resume/TimeLine';

import './Resume.scss';

export default function Resume() {
	return (
		<>
			<SlideMenu currentPage={RESUME} />
			<div className='landing'>
				<Section
					content={
						<>
							<TitleSection title={'RESUME.title.2'} />
							<Row>
								{Skills.map((skill) => (
									<Skill
										key={skill.id}
										title={skill.title}
										percentage={skill.percentage}
									/>
								))}
							</Row>
						</>
					}
				/>
				<Section
					content={
						<>
							<TitleSection title={'RESUME.title.3'} />
							<Row>
								<TimeLine list={Education} />
							</Row>
						</>
					}
				/>
				<Section
					content={
						<>
							<TitleSection title={'RESUME.title.4'} />
							<Row>
								<TimeLine list={ProfessionalExperience} />
							</Row>
						</>
					}
				/>
				<Section
					content={
						<>
							<TitleSection title={'RESUME.title.5'} />
							<Row>
								<TimeLine list={Recognitions} />
							</Row>
						</>
					}
				/>
			</div>
		</>
	);
}
