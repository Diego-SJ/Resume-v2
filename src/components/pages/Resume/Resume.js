import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Skills,
  Education,
  ProfessionalExperience,
  Recognitions,
} from '../../../utils/dbTemp';
import Section from '../../layouts/Section';
import Skill from '../../common/Skill';
import TimeLine from '../../common/TimeLine';

import './Resume.scss';

export default function Resume() {
  const { t } = useTranslation();
  return (
    <>
      <main className="landing">
        <Section title={'RESUME.title.objective'}>
          <div className="paragraph-justify">{t('RESUME.OBJECTIVE.text')}</div>
        </Section>
        <Section title={'RESUME.title.skills'}>
          {Skills.map((skill) => (
            <Skill
              key={skill.id}
              title={skill.title}
              percentage={skill.percentage}
            />
          ))}
        </Section>
        <Section title={'RESUME.title.education'}>
          <TimeLine list={Education} />
        </Section>
        <Section title={'RESUME.title.proExp'}>
          <TimeLine list={ProfessionalExperience} />
        </Section>
        <Section title={'RESUME.title.recognitions'}>
          <TimeLine list={Recognitions} />
        </Section>
      </main>
    </>
  );
}
