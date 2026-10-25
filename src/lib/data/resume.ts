import { HomeIcon, NotebookIcon, Youtube } from 'lucide-svelte';
import type { Locale } from '$lib/i18n';

// Navbar Icons
import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import InstagramSvg from '$lib/imgs/instagram.svg';
import InstagramDarkSvg from '$lib/imgs/instagram-dark.svg';

const SKILLS_FR = [
	{ name: 'Microsoft Word', text: true },
	{ name: 'Microsoft PowerPoint', text: true },
	{ name: 'Microsoft Excel', text: true },
	{ name: 'Leadership', text: true },
	{ name: 'Collaboration', text: true },
	{ name: 'Adaptabilité', text: true },
	{ name: 'Communication efficace', text: true },
	{ name: 'Rigueur', text: true },
	{ name: 'Éthique professionnelle', text: true },
	{ name: "Capacité d'apprentissage rapide", text: true }
];

const SKILLS_EN = [
	{ name: 'Microsoft Word', text: true },
	{ name: 'Microsoft PowerPoint', text: true },
	{ name: 'Microsoft Excel', text: true },
	{ name: 'Leadership', text: true },
	{ name: 'Collaboration', text: true },
	{ name: 'Adaptability', text: true },
	{ name: 'Effective Communication', text: true },
	{ name: 'Rigour', text: true },
	{ name: 'Professional Ethics', text: true },
	{ name: 'Fast Learner', text: true }
];

export const DATA_FR = {
	name: 'Imene Hadid',
	nameComposed: {
		first: 'Imene',
		last: 'Hadid'
	},
	initials: 'IH',
	url: 'https://www.youtube.com/@dozfikr',
	img: '/pfp.png',
	location: 'Paris, France',
	locationLink: 'https://www.google.com/maps/place/Paris',
	description: 'Écologue spécialisée en protection des écosystèmes & biodiversité.',
	summary: `Jeune écologue ambitieuse, spécialisée en protection des écosystèmes, je poursuis actuellement un master en biodiversité, écologie et évolution, avec une spécialisation en société et biodiversité, au Museum national d'Histoire naturelle (MNHN) de Paris. Animée par l'ambition et une grande curiosité, je suis rigoureuse et axée sur les résultats.`,
	avatarUrl: '/pfp.png',
	skills: SKILLS_FR,
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Accueil' },
	],
	contact: {
		email: 'imene.hadid@gmail.com',
		tel: '+33621619859',
		social: {
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/imenehadid/',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			Instagram: {
				name: 'Instagram',
				url: 'https://www.instagram.com/',
				icon: InstagramSvg,
				dark_icon: InstagramDarkSvg,
				navbar: false
			},
			Youtube: {
				name: 'YouTube, dozfikr',
				url: 'https://www.youtube.com/@dozfikr',
				icon: Youtube,
				dark_icon: Youtube,
				navbar: true
			},
			email: {
				name: 'Envoyer un e-mail',
				url: 'mailto:imene.hadid@gmail.com',
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			}
		}
	},
	internships: [
		{
			company: 'Parc culturel du Tassili (OPNCT)',
			href: 'https://www.opnct.gov.dz',
			badges: [],
			location: 'Djanet, Algérie',
			title: 'Stagiaire',
			logoUrl: '/logos/tassili.svg',
			start: 'Mai 2023',
			end: 'Mai 2023',
			description: 'Stage professionnel au sein du Parc culturel du Tassili.'
		},
		{
			company: 'Direction générale des forêts',
			href: 'http://www.dgf.org.dz/',
			badges: [],
			location: 'Alger, Algérie',
			title: 'Stagiaire',
			logoUrl: '/logos/dgf.png',
			start: 'Avr 2023',
			end: 'Avr 2023',
			description: 'Stage professionnel à la Direction générale des forêts.'
		},
		{
			company: 'GE ALGESCO',
			href: 'https://www.linkedin.com/company/algesco-spa',
			badges: [],
			location: 'Blida, Algérie',
			title: 'Stagiaire HSE',
			logoUrl: '/logos/algesco.svg',
			start: 'Nov 2022',
			end: 'Déc 2022',
			description:
				"Étude de l'importance de l'hygiène et de la sécurité environnementale (HSE) en milieu industriel."
		},
		{
			company: 'SONATRACH / ENI',
			href: 'https://www.sonatrach.com',
			badges: [],
			location: 'Hassi Messaoud, Algérie',
			title: 'Stagiaire Environnement',
			logoUrl: '/logos/sonatrach.png',
			start: 'Sep 2022',
			end: 'Oct 2022',
			description:
				"Examen approfondi de l'importance de l'environnement dans l'industrie pétrolière. Compréhension des procédures liées au traitement et au transport du pétrole brut dans l'industrie pétrolière algérienne."
		},
		{
			company: 'Jardin expérimental du Hamma',
			href: 'https://www.jardindessai.dz/',
			badges: [],
			location: 'Alger, Algérie',
			title: 'Stagiaire',
			logoUrl: '/logos/hamma.png',
			start: 'Mai 2021',
			end: 'Mai 2021',
			description: 'Stage professionnel au Jardin expérimental du Hamma.'
		},
		{
			company: 'Conservation des forêts (CFA)',
			href: 'https://fr.wikipedia.org/wiki/Conservation_des_for%C3%AAts_d%27Alger',
			badges: [],
			location: 'Meurdja, Algérie',
			title: 'Stagiaire',
			logoUrl: '/logos/cfa.png',
			start: 'Mar 2021',
			end: 'Mar 2021',
			description: 'Stage professionnel à la Conservation des forêts.'
		},
		{
			company: 'Mediterranean Float Glass',
			href: 'https://mfg.dz/',
			badges: [],
			location: 'Algérie',
			title: 'Stagiaire HSE',
			logoUrl: '/logos/mfg.svg',
			start: 'Fév 2021',
			end: 'Fév 2021',
			description:
				"Découverte des procédés de fabrication du verre. Compréhension des directives essentielles en matière de santé, de sécurité et d'environnement."
		},
		{
			company: 'SEAAL',
			href: 'https://www.seaal.dz',
			badges: [],
			location: 'Algérie',
			title: 'Stagiaire',
			logoUrl: '/logos/seaal.png',
			start: 'Jan 2021',
			end: 'Jan 2021',
			description: 'Découverte des installations de traitement des eaux usées.'
		}
	],
	work: [
		{
			company: 'MAIOREB SARL',
			href: 'https://www.maioreb.com/',
			badges: [],
			location: 'Alger, Algérie',
			title: 'Assistante technique, développement des spécifications',
			logoUrl: '/logos/maioreb.png',
			start: 'Mai 2025',
			end: 'Juin 2025',
			description: 'Assistance technique pour le développement des spécifications.'
		},
		{
			company: 'USTHB',
			href: 'https://www.usthb.dz',
			badges: [],
			location: 'Alger, Algérie',
			title: 'Enseignante universitaire',
			logoUrl: '/logos/usthb.png',
			start: 'Fév 2024',
			end: 'Mai 2025',
			description:
				"Élaboration d'un programme adapté aux tutoriels, à la didactique et à la pédagogie. Conception d'examens et de séries d'exercices."
		},
		{
			company: 'SAFEX',
			href: 'https://www.safex.dz/',
			badges: [],
			location: 'Alger, Algérie',
			title: 'Exposante',
			logoUrl: '/logos/safex.png',
			start: 'Jan 2024',
			end: 'Jan 2024',
			description:
				'Marketing stratégique et présentation des produits. Mise en œuvre de méthodologies de vente sophistiquées et accompagnement ciblé.'
		},
		{
			company: 'TR Technology',
			href: 'https://trtechnology.eu/',
			badges: [],
			location: 'Florence, Italie',
			title: 'Coordinatrice',
			logoUrl: '/logos/tr-technology.svg',
			start: 'Jan 2024',
			end: 'Mai 2024',
			description:
				"Facilitation de la communication et gestion des partenariats. Rédaction de rapports et diffusion de mises à jour régulières concernant l'état de la collaboration."
		}
	],
	education: [
		{
			school: "Museum national d'Histoire naturelle (MNHN), Paris",
			href: 'https://www.mnhn.fr',
			degree: 'Master 2, Biodiversité et aménagement du térritoire',
			logoUrl: '/logos/mnhn.png',
			start: '2026',
			end: '2027'
		},
		{
			school: "Museum national d'Histoire naturelle (MNHN), Paris",
			href: 'https://www.mnhn.fr',
			degree: 'Master 1, Société, Écologie et Biodiversité',
			logoUrl: '/logos/mnhn.png',
			start: '2025',
			end: '2026'
		},
		{
			school: 'USTHB, Alger',
			href: 'https://www.usthb.dz',
			degree: "Master, Protection et gestion des écosystèmes",
			logoUrl: '/logos/usthb.png',
			start: '2021',
			end: '2023'
		},
		{
			school: 'USTHB, Alger',
			href: 'https://www.usthb.dz',
			degree: "Licence, Écologie et sciences de l'environnement",
			logoUrl: '/logos/usthb.png',
			start: '2018',
			end: '2021'
		},
	],
	projects: [
		{
			title: 'dozfikr, Chaîne YouTube éducative',
			href: 'https://www.youtube.com/@dozfikr',
			dates: 'Sep 2023, Présent',
			active: true,
			description:
				'Création de vidéos intellectuelles sur la chaîne YouTube « dozfikr », axées sur la sensibilisation à l\'écologie, à la biodiversité et aux enjeux environnementaux.',
			technologies: ['Contenu éducatif', 'YouTube', 'Écologie', 'Biodiversité'],
			links: [
				{
					type: 'Chaîne YouTube',
					href: 'https://www.youtube.com/@dozfikr',
					icon: Youtube
				}
			],
			image: '/logos/dozfikr.png',
			video: ''
		}
	],
	hackathons: [
		{
			title: '🏆 Majore de promotion, L1-L2, L3, M1, M2',
			location: 'USTHB / MNHN',
			description:
				'Majore de promotion au cours des cycles de licence (L1-L2, L3) et de master (M1, M2), récompensant les résultats académiques les plus élevés de la promotion.',
			image: '/logos/usthb.png',
			links: []
		},
		{
			title: 'Volontariat, Club Biosciences, Fondation Unie USTHB (AUF)',
			location: 'Alger, Algérie',
			description:
				"Engagement bénévole au sein du Club Biosciences affilié à la Fondation Unie USTHB et à l'Agence universitaire de la Francophonie (AUF).",
			image: '/logos/auf.png',
			links: []
		},
		{
			title: 'Photographe indépendante',
			location: 'Algérie / France',
			dates: 'Depuis 2019',
			description:
				'Pratique de la photographie indépendante depuis 2019, avec un œil particulier pour la nature et les paysages.',
			image: '/logos/photo2.png',
			links: []
		},
		{
			title: 'Community Manager',
			location: 'Algérie',
			dates: 'Oct 2022 – Jan 2024',
			description: 'Gestion de communauté et ventes sur les réseaux sociaux.',
			image: '/logos/cm.png',
			links: []
		}
	]
};

export const DATA_EN = {
	name: 'Imene Hadid',
	nameComposed: {
		first: 'Imene',
		last: 'Hadid'
	},
	initials: 'IH',
	url: 'https://www.youtube.com/@dozfikr',
	img: '/pfp.png',
	location: 'Paris, France',
	locationLink: 'https://www.google.com/maps/place/Paris',
	description: 'Ecologist specialised in ecosystem protection & biodiversity.',
	summary: `An ambitious young ecologist specialised in ecosystem protection, currently pursuing a Master's degree in Biodiversity, Ecology and Evolution, with a specialisation in Society and Biodiversity, at the Muséum national d'Histoire naturelle (MNHN) in Paris. Driven by ambition and curiosity, I am rigorous and results-oriented.`,
	avatarUrl: '/pfp.png',
	skills: SKILLS_EN,
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
	],
	contact: {
		email: 'imene.hadid@gmail.com',
		tel: '+33621619859',
		social: {
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/imenehadid/',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			Instagram: {
				name: 'Instagram',
				url: 'https://www.instagram.com/',
				icon: InstagramSvg,
				dark_icon: InstagramDarkSvg,
				navbar: false
			},
			Youtube: {
				name: 'YouTube, dozfikr',
				url: 'https://www.youtube.com/@dozfikr',
				icon: Youtube,
				dark_icon: Youtube,
				navbar: true
			},
			email: {
				name: 'Send Email',
				url: 'mailto:imene.hadid@gmail.com',
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			}
		}
	},
	internships: [
		{
			company: 'Parc culturel du Tassili (OPNCT)',
			href: 'https://www.opnct.gov.dz',
			badges: [],
			location: 'Djanet, Algeria',
			title: 'Intern',
			logoUrl: '/logos/tassili.svg',
			start: 'May 2023',
			end: 'May 2023',
			description: 'Professional internship at the Tassili Cultural Park.'
		},
		{
			company: 'Direction générale des forêts',
			href: 'http://www.dgf.org.dz/',
			badges: [],
			location: 'Algiers, Algeria',
			title: 'Intern',
			logoUrl: '/logos/dgf.png',
			start: 'Apr 2023',
			end: 'Apr 2023',
			description: 'Professional internship at the Directorate General of Forests.'
		},
		{
			company: 'GE ALGESCO',
			href: 'https://www.linkedin.com/company/algesco-spa',
			badges: [],
			location: 'Blida, Algeria',
			title: 'HSE Intern',
			logoUrl: '/logos/algesco.svg',
			start: 'Nov 2022',
			end: 'Dec 2022',
			description:
				'Study of the importance of hygiene and environmental safety (HSE) in an industrial setting.'
		},
		{
			company: 'SONATRACH / ENI',
			href: 'https://www.sonatrach.com',
			badges: [],
			location: 'Hassi Messaoud, Algeria',
			title: 'Environment Intern',
			logoUrl: '/logos/sonatrach.png',
			start: 'Sep 2022',
			end: 'Oct 2022',
			description:
				'In-depth examination of the importance of the environment in the oil industry. Understanding of procedures related to the treatment and transportation of crude oil in the Algerian petroleum industry.'
		},
		{
			company: 'Jardin expérimental du Hamma',
			href: 'https://www.jardindessai.dz/',
			badges: [],
			location: 'Algiers, Algeria',
			title: 'Intern',
			logoUrl: '/logos/hamma.png',
			start: 'May 2021',
			end: 'May 2021',
			description: 'Professional internship at the Hamma Experimental Garden.'
		},
		{
			company: 'Conservation des forêts (CFA)',
			href: 'https://fr.wikipedia.org/wiki/Conservation_des_for%C3%AAts_d%27Alger',
			badges: [],
			location: 'Meurdja, Algeria',
			title: 'Intern',
			logoUrl: '/logos/cfa.png',
			start: 'Mar 2021',
			end: 'Mar 2021',
			description: 'Professional internship at the Forest Conservation Authority.'
		},
		{
			company: 'Mediterranean Float Glass',
			href: 'https://mfg.dz/',
			badges: [],
			location: 'Algeria',
			title: 'HSE Intern',
			logoUrl: '/logos/mfg.svg',
			start: 'Feb 2021',
			end: 'Feb 2021',
			description:
				'Discovery of glass manufacturing processes. Understanding of essential health, safety and environment guidelines.'
		},
		{
			company: 'SEAAL',
			href: 'https://www.seaal.dz',
			badges: [],
			location: 'Algeria',
			title: 'Intern',
			logoUrl: '/logos/seaal.png',
			start: 'Jan 2021',
			end: 'Jan 2021',
			description: 'Overview of wastewater treatment facilities.'
		}
	],
	work: [
		{
			company: 'MAIOREB SARL',
			href: 'https://www.maioreb.com/',
			badges: [],
			location: 'Algiers, Algeria',
			title: 'Technical Assistant, Specifications Development',
			logoUrl: '/logos/maioreb.png',
			start: 'May 2025',
			end: 'Jun 2025',
			description: 'Technical assistance for the development of specifications.'
		},
		{
			company: 'USTHB',
			href: 'https://www.usthb.dz',
			badges: [],
			location: 'Algiers, Algeria',
			title: 'University Lecturer',
			logoUrl: '/logos/usthb.png',
			start: 'Feb 2024',
			end: 'May 2025',
			description:
				'Development of a programme adapted to tutorials, didactics and pedagogy. Design of exams and exercise series.'
		},
		{
			company: 'SAFEX',
			href: 'https://www.safex.dz/',
			badges: [],
			location: 'Algiers, Algeria',
			title: 'Exhibitor',
			logoUrl: '/logos/safex.png',
			start: 'Jan 2024',
			end: 'Jan 2024',
			description:
				'Strategic marketing and product presentation. Implementation of sophisticated sales methodologies and targeted support.'
		},
		{
			company: 'TR Technology',
			href: 'https://trtechnology.eu/',
			badges: [],
			location: 'Florence, Italy',
			title: 'Coordinator',
			logoUrl: '/logos/tr-technology.svg',
			start: 'Jan 2024',
			end: 'May 2024',
			description:
				'Facilitation of communication and partnership management. Writing reports and disseminating regular updates on the status of the collaboration.'
		}
	],
	education: [
		{
			school: "Museum national d'Histoire naturelle (MNHN), Paris",
			href: 'https://www.mnhn.fr',
			degree: 'Master 2, Biodiversity and Territorial Planning',
			logoUrl: '/logos/mnhn.png',
			start: '2026',
			end: '2027'
		},
		{
			school: "Museum national d'Histoire naturelle (MNHN), Paris",
			href: 'https://www.mnhn.fr',
			degree: 'Master 1, Society, Ecology and Biodiversity',
			logoUrl: '/logos/mnhn.png',
			start: '2025',
			end: '2026'
		},
		{
			school: 'USTHB, Algiers',
			href: 'https://www.usthb.dz',
			degree: 'Master, Protection and Management of Ecosystems',
			logoUrl: '/logos/usthb.png',
			start: '2021',
			end: '2023'
		},
		{
			school: 'USTHB, Algiers',
			href: 'https://www.usthb.dz',
			degree: 'Bachelor, Ecology and Environmental Sciences',
			logoUrl: '/logos/usthb.png',
			start: '2018',
			end: '2021'
		}
	],
	projects: [
		{
			title: 'dozfikr, Educational YouTube Channel',
			href: 'https://www.youtube.com/@dozfikr',
			dates: 'Sep 2023, Present',
			active: true,
			description:
				'Creation of intellectual videos on the "dozfikr" YouTube channel, focused on raising awareness about ecology, biodiversity and environmental issues.',
			technologies: ['Educational Content', 'YouTube', 'Ecology', 'Biodiversity'],
			links: [
				{
					type: 'YouTube Channel',
					href: 'https://www.youtube.com/@dozfikr',
					icon: Youtube
				}
			],
			image: '/logos/dozfikr.png',
			video: ''
		}
	],
	hackathons: [
		{
			title: '🏆 Top of Class, L1-L2, L3, M1, M2',
			location: 'USTHB / MNHN',
			description:
				'Top of class (Majore de promotion) throughout undergraduate (L1-L2, L3) and master (M1, M2) cycles, recognising the highest academic results in the cohort.',
			image: '/logos/usthb.png',
			links: []
		},
		{
			title: 'Volunteer, Club Biosciences, Fondation Unie USTHB (AUF)',
			location: 'Algiers, Algeria',
			description:
				'Voluntary engagement within the Biosciences Club affiliated with the Fondation Unie USTHB and the Agence universitaire de la Francophonie (AUF).',
			image: '/logos/auf.png',
			links: []
		},
		{
			title: 'Independent Photographer',
			location: 'Algeria / France',
			dates: 'Since 2019',
			description:
				'Practising independent photography since 2019, with a particular eye for nature and landscapes.',
			image: '/logos/photo2.png',
			links: []
		},
		{
			title: 'Community Manager',
			location: 'Algeria',
			dates: 'Oct 2022 – Jan 2024',
			description: 'Community management and sales on social media.',
			image: '/logos/cm.png',
			links: []
		}
	]
};

export function getResumeData(loc: Locale = 'en') {
	return loc === 'fr' ? DATA_FR : DATA_EN;
}

// Default export in English as requested
export let DATA = DATA_EN;
