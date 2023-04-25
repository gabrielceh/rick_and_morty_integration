import eigthbitslogo from '../assets/images/logo8bits.png';
import pokeapp from '../assets/images/pokeball.png';
import rpsls from '../assets/images/rock_paper_scissors.png';
import tictactoe from '../assets/images/tictactoe.png';
import ReactICon from '../components/icons/ReactIcon';
import VueIcon from '../components/icons/VueIcon';
import NextJsICon from '../components/icons/NextJSIcon';
import TailwindIcon from '../components/icons/TailwindICon';
import mainImg from '../assets/images/about_main_picture.jpg';

export const aboutMainImage = {
	img: mainImg,
	alt: 'Gabriel Cervantes',
};

export const projects = [
	{
		id: 0,
		url: 'https://8bitsstore.vercel.app/',
		name: '8 Bits Store',
		img: eigthbitslogo,
		description:
			'Website for 8 Bits Store Bq developed with Next js and tailwind.',
	},
	{
		id: 1,
		url: 'https://rpsls-g.netlify.app/',
		name: 'Rock Paper Scissors Lizard Spock',
		img: rpsls,
		description:
			'Game developed with Vue, Pinia and Tailwind. Frontend Mentor project.',
	},
	{
		id: 3,
		url: 'https://tic-tac-toe-gabs.netlify.app/',
		name: 'Tic Tac Toe',
		img: tictactoe,
		description: 'Game developed with React. Frontend Mentor project.',
	},
	{
		id: 4,
		url: 'https://pokedex-gabo.netlify.app/index.html',
		name: 'Pokedex',
		img: pokeapp,
		description: 'Website using the PokeApi developed with HTML, JS and CSS.',
	},
];

export const skills = [
	{ id: 'skill-0', component: ReactICon, name: 'React' },
	{ id: 'skill-1', component: VueIcon, name: 'Vue' },
	{ id: 'skill-2', component: NextJsICon, name: 'Next js' },
	{ id: 'skill-3', component: TailwindIcon, name: 'Tailwind' },
];
