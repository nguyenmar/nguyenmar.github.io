
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faYoutube, faKeybase } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Marian",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hi there, I'm Marian",
	description: "A junior software developer creating and maintaining websites and applications",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/123EDY74l_NFynR969LD2zpngskNg5m93/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I recently graduated from Simon Fraser University in 2023 with a degree in Computing Science. I kick started my professional career as a JR Software Developer Co-op working remotely for a water and fuel company.",
		"I enjoy working and coming up with website or applications that people can use in their daily lives. I am currently brainstorming about a TFT comp decider application as a personal project, and working on creating a website for a client.",
		"When I’m not programming, I focus on my hobbies which are: gaming, crocheting, playing basketball, and meeting new people.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Software Development",
			description: " I strive to develop reliable, scalable, and user-friendly software applications that meet the needs of clients and end-users. ",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I am committed to delivering high-quality websites that not only meet the client's requirements but also provide an exceptional user experience.",
			icons: null,
		},
		{
			title: "Mobile Development",
			description: "Designing and developing innovative mobile apps with seamless functionality and captivating user interfaces for optimal mobile experiences.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "K-Drama Tracker",
			description: "This is a web application that allows users to track and manage their favorite Korean dramas.",
			icons: [
				{
					icon: faKeybase,
					link: "https://6478dbdf0034a03bebc7ea7a--kdrama-tracker.netlify.app/",
				},
				{
					icon: faGithub,
					link: "https://github.com/nguyenmar/ktracker",
				},
			]
		},
		{
			title: "SquadUp",
			description: "An Android application that simplifies finding a drop-in activity in your local area.",
			icons: [
				{
					icon: faYoutube,
					link: "https://www.youtube.com/watch?v=KgwtY4B2Op4",
				},
				{
					icon: faGithub,
					link: "https://github.com/nguyenmar/SquadUp",
				},
			]
		},
		{
			title: "Reversi",
			description: "Reversi where you can play against an AI that utilizes a pure Monte Carlo tree search to determine the next possible move.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/nguyenmar/Pure-MCTS-Reversi",
				},
			]
		},
		{
			title: "Poker Quarantine",
			description: "A web application where users can choose to bet money in a variety of online poker games played against other players.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/nguyenmar/PokerQuarantine",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Bubble tea chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at mariannguyen24@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:mariannguyen24@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Marian Nguyen | Software Developer ",
	description: "I create applications and websites. I recently graduated from Simon Fraser University in 2023 with a degree in Computing Science.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@nguyenmar",
	description: "Software Developer",
	cards: [
		{
			title: "K-Drama Tracker",
			link: "https://kdrama-tracker.netlify.app/",
		},
		{
			title: "Instagram",
			link: "https://www.instagram.com/nguyenmar/",
		},
		{
			title: "Email",
			link: "mailto:mariannguyen24@gmail.com",
		},
		{
			title: "GitHub",
			link: "https://github.com/nguyenmar/",
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/marian-nguyen-0328921b1/",
		},
	]
}