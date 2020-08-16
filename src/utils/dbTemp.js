import { v4 as uuidv4 } from 'uuid';

// * INFO ABOUT PAGE
export const PersonalData = [
  {
    id: 1,
    title: 'ABOUT.fullName.1',
    description: 'ABOUT.fullName.2',
  },
  {
    id: 2,
    title: 'ABOUT.age.1',
    description: '21',
  },
  {
    id: 3,
    title: 'ABOUT.birthday.1',
    description: '9/12/1998',
  },
  {
    id: 4,
    title: 'ABOUT.nationality.1',
    description: 'ABOUT.nationality.2',
  },
  {
    id: 5,
    title: 'ABOUT.languages.1',
    description: 'ABOUT.languages.2',
  },
  {
    id: 6,
    title: 'ABOUT.maritalStatus.1',
    description: 'ABOUT.maritalStatus.2',
  },
];

export const Services = [
  {
    id: 1,
    icon: 'layers',
    title: 'ABOUT.SERVICE.title.1',
    description: 'ABOUT.SERVICE.description.1',
  },
  {
    id: 2,
    icon: 'monitor',
    title: 'ABOUT.SERVICE.title.2',
    description: 'ABOUT.SERVICE.description.2',
  },
  {
    id: 3,
    icon: 'smartphone',
    title: 'ABOUT.SERVICE.title.3',
    description: 'ABOUT.SERVICE.description.3',
  },
];

// * INFO RESUME PAGE
export const Skills = [
  { id: uuidv4(), title: 'REACT', percentage: '90' },
  { id: uuidv4(), title: 'GIT', percentage: '90' },
  { id: uuidv4(), title: 'SCRUM', percentage: '80' },
  { id: uuidv4(), title: 'HTML', percentage: '90' },
  { id: uuidv4(), title: 'CSS', percentage: '85' },
  { id: uuidv4(), title: 'JAVASCRIPT', percentage: '85' },
  { id: uuidv4(), title: 'PHP', percentage: '90' },
  { id: uuidv4(), title: 'PYTHON', percentage: '40' },
  { id: uuidv4(), title: 'C++', percentage: '35' },
  { id: uuidv4(), title: 'C#', percentage: '30' },
  { id: uuidv4(), title: 'JAVA', percentage: '90' },
  { id: uuidv4(), title: 'SQL', percentage: '85' },
];

export const Education = [
  {
    id: 1,
    date: 'RESUME.EDUCATION.1.date',
    title: 'RESUME.EDUCATION.1.title',
    subtitle: 'RESUME.EDUCATION.1.subtitle',
    description: 'RESUME.EDUCATION.1.description',
  },
  {
    id: 2,
    date: 'RESUME.EDUCATION.2.date',
    title: 'RESUME.EDUCATION.2.title',
    subtitle: 'RESUME.EDUCATION.2.subtitle',
    description: 'RESUME.EDUCATION.2.description',
  },
];

export const ProfessionalExperience = [
  {
    id: 1,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.1.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.1.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.1.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.1.description',
  },
  // {
  // 	id: 2,
  // 	date: 'RESUME.PROFESSIONAL_EXPERIENCE.2.date',
  // 	title: 'RESUME.PROFESSIONAL_EXPERIENCE.2.title',
  // 	subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.2.subtitle',
  // 	description: 'RESUME.PROFESSIONAL_EXPERIENCE.2.description',
  // },
  {
    id: 3,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.3.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.3.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.3.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.3.description',
  },
  {
    id: 4,
    date: 'RESUME.PROFESSIONAL_EXPERIENCE.4.date',
    title: 'RESUME.PROFESSIONAL_EXPERIENCE.4.title',
    subtitle: 'RESUME.PROFESSIONAL_EXPERIENCE.4.subtitle',
    description: 'RESUME.PROFESSIONAL_EXPERIENCE.4.description',
  },
];

export const Recognitions = [
  {
    id: 1,
    date: 'RESUME.RECOGNITIONS.1.date',
    title: 'RESUME.RECOGNITIONS.1.title',
  },
  {
    id: 2,
    date: 'RESUME.RECOGNITIONS.2.date',
    title: 'RESUME.RECOGNITIONS.2.title',
  },
  {
    id: 3,
    date: 'RESUME.RECOGNITIONS.3.date',
    title: 'RESUME.RECOGNITIONS.3.title',
  },
  {
    id: 4,
    date: 'RESUME.RECOGNITIONS.4.date',
    title: 'RESUME.RECOGNITIONS.4.title',
  },
  {
    id: 5,
    date: 'RESUME.RECOGNITIONS.5.date',
    title: 'RESUME.RECOGNITIONS.5.title',
  },
  {
    id: 6,
    date: 'RESUME.RECOGNITIONS.6.date',
    title: 'RESUME.RECOGNITIONS.6.title',
  },
  {
    id: 7,
    date: 'RESUME.RECOGNITIONS.7.date',
    title: 'RESUME.RECOGNITIONS.7.title',
  },
  {
    id: 8,
    date: 'RESUME.RECOGNITIONS.8.date',
    title: 'RESUME.RECOGNITIONS.8.title',
  },
  {
    id: 9,
    date: 'RESUME.RECOGNITIONS.9.date',
    title: 'RESUME.RECOGNITIONS.9.title',
  },
];

// * INFO PORTFOLIO PAGE

export const PortfolioInfo = [
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/pokedex.jpg'),
    link: 'https://pokedex-rd.netlify.app/',
    title: 'PORTFOLIO.ITEM.16.title',
    description: 'PORTFOLIO.ITEM.16.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/rickmortyredux.jpg'),
    link: 'https://rickandmorty-redux-graphql.netlify.app/',
    title: 'PORTFOLIO.ITEM.15.title',
    description: 'PORTFOLIO.ITEM.15.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/ecowatering.jpg'),
    link: 'https://ecowateringplants.000webhostapp.com/ecowateringplants.com/',
    title: 'PORTFOLIO.ITEM.1.title',
    description: 'PORTFOLIO.ITEM.1.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/awl.jpg'),
    link: 'https://linuspauling2.000webhostapp.com/awl/',
    title: 'PORTFOLIO.ITEM.2.title',
    description: 'PORTFOLIO.ITEM.2.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/natours.jpg'),
    link: 'https://diego-sj.github.io/Natours-With-Sass/',
    title: 'PORTFOLIO.ITEM.3.title',
    description: 'PORTFOLIO.ITEM.3.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/taskslist.jpg'),
    link: 'https://tasklist-rtl.netlify.app/',
    title: 'PORTFOLIO.ITEM.4.title',
    description: 'PORTFOLIO.ITEM.4.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/empsch.jpg'),
    link: 'https://prueba-tecnica-habil.netlify.app/',
    title: 'PORTFOLIO.ITEM.5.title',
    description: 'PORTFOLIO.ITEM.5.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/ramapi.jpg'),
    link: 'https://rickandmorty-api.netlify.app/',
    title: 'PORTFOLIO.ITEM.6.title',
    description: 'PORTFOLIO.ITEM.6.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/prs.jpg'),
    link: 'https://diego-sj.github.io/ui-psr/',
    title: 'PORTFOLIO.ITEM.7.title',
    description: 'PORTFOLIO.ITEM.7.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/fixstone.jpg'),
    link: 'https://diego-sj.github.io/Fixstone-Website/',
    title: 'PORTFOLIO.ITEM.8.title',
    description: 'PORTFOLIO.ITEM.8.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/paleteria.jpg'),
    // link: 'https://github.com/Diego-SJ/PaleteriaChuchin',
    title: 'PORTFOLIO.ITEM.9.title',
    description: 'PORTFOLIO.ITEM.9.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/meet.jpg'),
    // link: 'https://github.com/Diego-SJ/Meet',
    title: 'PORTFOLIO.ITEM.10.title',
    description: 'PORTFOLIO.ITEM.10.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/cvra.jpg'),
    // link: 'https://github.com/Diego-SJ/Resume-v2',
    title: 'PORTFOLIO.ITEM.11.title',
    description: 'PORTFOLIO.ITEM.11.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/mtw.jpg'),
    // link:
    // 'https://github.com/ActoSoft/MexicoTrasciende-Frontend/tree/feature/team_organizer',
    title: 'PORTFOLIO.ITEM.12.title',
    description: 'PORTFOLIO.ITEM.12.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/bunti.jpg'),
    // link: 'https://github.com/ActoSoft/buntiAppMobile',
    title: 'PORTFOLIO.ITEM.13.title',
    description: 'PORTFOLIO.ITEM.13.description',
  },
  {
    id: uuidv4(),
    image: require('../assets/img/portfolios/egcp.jpg'),
    link: null,
    title: 'PORTFOLIO.ITEM.14.title',
    description: 'PORTFOLIO.ITEM.14.description',
  },
];

// * INFO CONTACT PAGE

export const ContactInfo = [
  {
    id: 1,
    icon: 'map-pin',
    title: 'CONTACT.INFO.address.title',
    description: 'CONTACT.INFO.address.description',
  },
  {
    id: 2,
    icon: 'phone',
    title: 'CONTACT.INFO.phone.title',
    description: 'CONTACT.INFO.phone.description',
  },
  {
    id: 3,
    icon: 'at-sign',
    title: 'CONTACT.INFO.email.title',
    description: 'CONTACT.INFO.email.description',
  },
];
