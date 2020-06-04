// * INFO ABOUT PAGE
export const PersonalData = [
	{
		id: 1,
		title: 'Full name',
		subtitle: 'Juan Diego Salas Jiménez',
	},
	{
		id: 2,
		title: 'Age',
		subtitle: '21',
	},
	{
		id: 3,
		title: 'Birthday',
		subtitle: '9/12/1998',
	},
	{
		id: 4,
		title: 'Nationality',
		subtitle: 'Mexican',
	},
	{
		id: 5,
		title: 'Languages',
		subtitle: 'Spanish (Native) - English (A2)',
	},
	{
		id: 6,
		title: 'Marital status',
		subtitle: 'Single',
	},
];

export const Services = [
	{
		id: 1,
		icon: 'layers',
		title: 'Web design',
		description:
			'The interface must project the corporate image of the client, its essence and values must be understood beyond placing only the logo.',
	},
	{
		id: 2,
		icon: 'monitor',
		title: 'Web development',
		description:
			'The optimization of the front-end as the back-end of the site; The objective is to control and optimize the website loading process.',
	},
	{
		id: 3,
		icon: 'smartphone',
		title: 'Mobile development',
		description:
			'Mobile devices guarantee the practicality we are looking for, so it is necessary that navigation and functionality be designed for mobile phones.',
	},
];

// * INFO RESUME PAGE
export const Skills = [
	{ id: 1, title: 'HTML', percentage: '90' },
	{ id: 2, title: 'CSS', percentage: '85' },
	{ id: 3, title: 'JAVASCRIPT', percentage: '85' },
	{ id: 4, title: 'PHP', percentage: '90' },
	{ id: 5, title: 'PYTHON', percentage: '40' },
	{ id: 6, title: 'C++', percentage: '35' },
	{ id: 7, title: 'C#', percentage: '30' },
	{ id: 8, title: 'JAVA', percentage: '90' },
	{ id: 9, title: 'SQL', percentage: '85' },
];

export const Education = [
	{
		id: 1,
		date: 'Aug 2016 - Present',
		title: 'Information Technology and Communications Engineering',
		subtitle:
			'Instituto Tecnológico Superior del Occidente del Estado de Hidalgo(ITSOEH)',
		description: 'Mixquiahuala de Juárez Hgo.',
	},
	{
		id: 2,
		date: 'Aug 2013 - Jul 2016',
		title: 'Programming Technician',
		subtitle:
			'Centro de Bachillerato Tecnológico Industrial y de Servicios No. 83',
		description: 'Actopan Hgo.',
	},
];

export const ProfessionalExperience = [
	{
		id: 1,
		date: 'Jun 2019 - Present',
		title: 'Software developer',
		subtitle: 'Actosoft Community',
		description:
			'Mobile application developer, member of the development team.\nBack-end development for user registration and geolocation of the “Bunti App” mobile app.\nFront-end development of the “Team organizer” module for the “México Trasciende” website, Tecnológico de Monterrey.',
	},
	{
		id: 2,
		date: 'Dec 2019 - Present',
		title: 'Freelancer',
		subtitle: 'Freelancer',
		description:
			'Development of the “Meet” web platform, Mixquiahuala de Juárez (In Process).',
	},
	{
		id: 3,
		date: 'Jun 2019 - Dec 2019',
		title: 'Web developer',
		subtitle: 'Colegio Linus Pauling',
		description:
			'Development of the “App Web Lecturas” platform to record, analyze and present data on learning in the Linus Pauling school, Progreso de Obregón.',
	},
	{
		id: 4,
		date: 'Aug 2017 - Dec 2017',
		title: 'Mobile developer and designer',
		subtitle: 'Ciclo-pep',
		description:
			'Member of the back-end and front-end development team of the “Eco Guardianes” mobile app.',
	},
];

export const Recognitions = [
	{
		id: 1,
		date: 'Present',
		title: 'Course "CCNA R&S: Scaling Networks" by Cisco and ITSOEH.',
	},
	{
		id: 2,
		date: 'Present',
		title: 'Course "Cybersecurity Essentials" by Cisco and ITSOEH.',
	},
	{
		id: 3,
		date: 'Oct 2019',
		title:
			'description No.18 nationwide in the "Coding CupTecNM" programming contest.',
	},
	{
		id: 4,
		date: 'Jan 2019',
		title: 'Course "CCNA R&S: Connecting Networks" by Cisco and ITSOEH.',
	},
	{
		id: 5,
		date: 'Aug 2018',
		title:
			'Course "CCNA R&S: Routing and Switching Essentials" by Cisco and ITSOEH.',
	},
	{
		id: 6,
		date: 'May 2018',
		title:
			'Participation in the course "Diseña tu propia página web desde 0" Provided by SoftMotion.',
	},
	{
		id: 7,
		date: 'Oct 2018',
		title:
			'1st description in the "Rally Latinoamericano de innovación" at headquarters level.',
	},
	{
		id: 8,
		date: 'Jan 2017',
		title: 'Course "CCNA R&S: Introduction to Networks" by Cisco and ITSOEH.',
	},
	{
		id: 9,
		date: 'Jun 2015',
		title:
			'Accreditation of competences in Microsoft Technologies for productivity (Word, Excel and PowerPoint) by SEP and Microsoft Mexico.',
	},
];

// * INFO PORTFOLIO PAGE

const img_p01 = require('../assets/img/portfolios/awl.jpg');
const img_p02 = require('../assets/img/portfolios/mtw.jpg');
const img_p03 = require('../assets/img/portfolios/bunti.jpg');
const img_p04 = require('../assets/img/portfolios/egcp.jpg');
const img_p05 = require('../assets/img/portfolios/meet.jpg');
const img_p06 = require('../assets/img/portfolios/cvra.jpg');
const img_p07 = require('../assets/img/portfolios/ecowatering.jpg');
const img_p08 = require('../assets/img/portfolios/fixstone.jpg');
const img_p09 = require('../assets/img/portfolios/prs.jpg');
const img_p10 = require('../assets/img/portfolios/natours.jpg');
const img_p11 = require('../assets/img/portfolios/paleteria.jpg');

export const PortfolioInfo = [
	{
		id: 11,
		image: img_p11,
		link: 'https://github.com/Diego-SJ/PaleteriaChuchin',
		title: 'Paleteria Chuchin',
		description: 'Desktop application with Electron, React and Firebase',
	},
	{
		id: 1,
		image: img_p05,
		link: 'https://github.com/Diego-SJ/Meet',
		title: 'Meet platform',
		description: 'Simple social network',
	},
	{
		id: 2,
		image: img_p06,
		link: 'https://github.com/Diego-SJ/Resume',
		title: 'My resume',
		description: 'My resume online',
	},
	{
		id: 3,
		image: img_p01,
		link: 'https://linuspauling2.000webhostapp.com/awl/',
		title: 'App Web Lecturas',
		description: 'Platform for Linus Pauling Collage',
	},
	{
		id: 4,
		image: img_p02,
		link:
			'https://github.com/ActoSoft/MexicoTrasciende-Frontend/tree/feature/team_organizer',
		title: 'Team Organizer',
		description: 'Module for the “México Trasciende” website',
	},
	{
		id: 7,
		image: img_p07,
		link: 'https://ecowateringplants.000webhostapp.com/ecowateringplants.com/',
		title: 'Ecowatering Plants',
		description: 'Website for school project',
	},
	{
		id: 8,
		image: img_p08,
		link: 'https://diego-sj.github.io/Fixstone-Website/',
		title: 'Fixstone landing page',
		description: 'Fixstone landing page prototype',
	},
	{
		id: 9,
		image: img_p09,
		link: 'https://diego-sj.github.io/ui-psr/',
		title: 'Paper, rock or scissors',
		description: 'Game of paper rock or scissors with js and Sass',
	},
	{
		id: 10,
		image: img_p10,
		link: 'https://diego-sj.github.io/Natours-With-Sass/',
		title: 'Natours landing page',
		description: 'Landing page with Sass (no responsive)',
	},
	{
		id: 5,
		image: img_p03,
		link: 'https://github.com/ActoSoft/buntiAppMobile',
		title: 'BuntiApp',
		description: 'Mobile app',
	},
	{
		id: 6,
		image: img_p04,
		link: null,
		title: 'BuntiEco GuardianesApp',
		description: 'Mobile App for Ciclo-Pep',
	},
];

// * INFO CONTACT PAGE

export const ContactInfo = [
	{
		id: 1,
		icon: 'map-pin',
		title: 'Address',
		description:
			'Pirul Street # 6 Mzna. Godo, Victoria Dextho, San Salvador Hgo. 42640',
	},
	{
		id: 2,
		icon: 'phone',
		title: 'Phone',
		description: '(+52) 771 415 29 97',
	},
	{
		id: 3,
		icon: 'at-sign',
		title: 'Email',
		description: 'dsalas035@gmail.com',
	},
];
