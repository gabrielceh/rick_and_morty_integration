import styled from 'styled-components';
import randomImg from '../assets/images/random.svg';
import { useNavigate } from 'react-router-dom';

function BtnGetRandom({ onSearch, characters = [] }) {
	// https://rickandmortyapi.com/documentation/#get-all-characters primer y ultimo id
	const navigate = useNavigate();
	const generateRandom = () => Math.floor(Math.random() * (826 - 1 + 1) + 1);

	const handleClick = () => {
		let random = generateRandom();
		const isIdInCharacters = characters.find((item) => item.id === random);

		if (!isIdInCharacters) {
			onSearch(random);
		} else {
			return window.alert(
				'El id generado ya esta en la lista, por favor generar otro'
			);
		}
		navigate('/');
	};

	return (
		<>
			<BtnRandomStyled onClick={handleClick}>
				<img
					src={randomImg}
					alt='Random icon'
				/>
			</BtnRandomStyled>
		</>
	);
}

export default BtnGetRandom;

const BtnRandomStyled = styled.button`
	cursor: pointer;
	background-color: ${({ theme }) => `${theme.colors.orange['400']}`};
	color: ${({ theme }) => `${theme.colors.slate['50']}`};
	padding: 0.5rem 1rem;
	border: 2px solid transparent;
	border-radius: 5px;
	font-family: 'ChakraPetch';
	font-size: 1rem;
	font-weight: bold;
	letter-spacing: 0.2rem;
	width: 50px;
	transition: background-color 0.1s ease-in, color 0.1s ease-in,
		border 0.1s ease-in, scale 0.1s ease-in;

	&:hover {
		scale: 1.1;
		color: ${({ theme }) => `${theme.colors.orange['100']}`};
		background-color: transparent;
		border: ${({ theme }) => ` 2px solid ${theme.colors.orange['100']}`};
	}
	&:active {
		scale: 0.9;
		color: ${({ theme }) => `${theme.colors.orange['200']}`};
		background-color: transparent;
		border: ${({ theme }) => ` 2px solid ${theme.colors.orange['200']}`};
	}

	& img {
		scale: 1.5;
	}
`;
