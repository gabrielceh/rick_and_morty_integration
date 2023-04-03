import { useState } from 'react';
import styled from 'styled-components';

function SearchBar({ onSearch }) {
	const [id, setId] = useState('');

	const handleChange = (e) => {
		setId(e.target.value);
	};

	const handleClick = (e) => {
		onSearch(id);
		setId('');
	};

	return (
		<SearchContainerStyled>
			<SearchInputStyled
				type='search'
				value={id}
				onChange={handleChange}
			/>
			<ButtonSearchStyled onClick={handleClick}>🔍</ButtonSearchStyled>
		</SearchContainerStyled>
	);
}

export default SearchBar;

const SearchContainerStyled = styled.div`
	display: flex;
	gap: 0.7rem;
	flex-wrap: wrap;
`;

const SearchInputStyled = styled.input`
	padding: 0.5rem 0.75rem;
	font-size: 1rem;
	font-family: 'ChakraPetch';
	font-weight: 600;
	color: ${({ theme }) => theme.text};
	background-color: ${({ theme }) => theme.body};
	outline: none;
	border: ${({ theme }) => `2px dashed transparent`};
	border-radius: 5px;
	transition: color 0.5s ease-in, background-color 0.5s ease-in;

	&:focus {
		outline: ${({ theme }) => ` 3px dashed ${theme.colors.yellow['500']}`};
	}
`;

const ButtonSearchStyled = styled.button`
	cursor: pointer;
	font-family: 'ChakraPetch';
	background-color: ${({ theme }) => theme.colors.yellow['400']};
	color: ${({ theme }) => theme.colors.slate['50']};
	padding: 0.3rem 1rem;
	font-size: 1rem;
	font-weight: bold;
	letter-spacing: 0.2rem;
	border-radius: 5px;
	border: 2px solid transparent;
	transition: background-color 0.1s ease-in, color 0.1s ease-in,
		border 0.1s ease-in, scale 0.1s ease-in;

	&:hover {
		scale: 1.1;
		color: ${({ theme }) => `${theme.colors.yellow['100']}`};
		background-color: transparent;
		border: ${({ theme }) => ` 2px solid ${theme.colors.yellow['100']}`};
	}

	&:active {
		scale: 0.9;
		color: ${({ theme }) => `${theme.colors.yellow['200']}`};
		background-color: transparent;
		border: ${({ theme }) => ` 2px solid ${theme.colors.yellow['200']}`};
	}
`;
