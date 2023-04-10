import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DarkModeContext } from '../context/DarkModeContext';
import { useModal } from '../hooks/useModal';
import { BtnOutlineStyled } from '../styled/BtnStyles.style';

function SearchBar({ onSearch, onModalClose }) {
	const [id, setId] = useState('');
	const { darkMode } = useContext(DarkModeContext);
	const [isOpen, openModal, closeModal] = useModal();

	const navigate = useNavigate();

	const handleChange = (event) => {
		setId(event.target.value);
	};

	const handleClick = (event) => {
		onSearch(id);
		setId('');
		closeModal();
		onModalClose();
		navigate('/home');
	};

	return (
		<>
			<BtnOutlineStyled
				color='yellow'
				width='80px'
				onClick={openModal}>
				Search
			</BtnOutlineStyled>

			{/* MODAL */}
			<SearchModalContainer className={isOpen ? 'open' : ''}>
				<SearchModalBoxStyled>
					<BtnCloseModalStyled onClick={closeModal}>ESC</BtnCloseModalStyled>
					<SearchInputStyled
						type='search'
						value={id}
						onChange={handleChange}
						mode={darkMode}
						placeholder='Example: 356'
					/>
					<ButtonSearchStyled
						onClick={handleClick}
						color='yellow'
						width='100%'>
						Add
					</ButtonSearchStyled>
				</SearchModalBoxStyled>
			</SearchModalContainer>
		</>
	);
}

export default SearchBar;

const SearchModalContainer = styled.section`
	position: fixed;
	z-index: 15;
	opacity: 0;
	visibility: hidden;
	background-color: ${({ theme }) => `${theme.colors.slate['900']}dd`};
	display: flex;
	justify-content: center;
	align-items: flex-start;

	&.open {
		opacity: 1;
		visibility: visible;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		min-height: 100vh;
		width: 100%;
	}
`;

const SearchModalBoxStyled = styled.article`
	margin-top: 3rem;
	width: 80%;
	min-width: 300px;
	max-width: 700px;
	padding: 2rem;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.emerald['700']};
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const SearchInputStyled = styled.input`
	padding: 0.5rem 0.75rem;
	font-size: 1rem;
	font-family: 'ChakraPetch';
	font-weight: 600;
	color: ${({ theme }) => theme.colors.slate['800']};
	background-color: ${({ theme }) => theme.colors.slate['100']};
	outline: none;
	border: ${({ theme }) => `2px dashed transparent`};
	border-radius: 5px;
	transition: outline 0.3s ease-in, background-color 0.5s ease-in;

	&:focus {
		outline: ${({ theme }) => ` 3px dashed ${theme.colors.yellow['500']}`};
	}
`;

const ButtonSearchStyled = styled.button`
	cursor: pointer;
	/* align-self: end; */
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
		scale: 1.05;
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

const BtnCloseModalStyled = styled.button`
	cursor: pointer;
	align-self: flex-end;
	padding: 0.3rem 0.5rem;
	color: ${({ theme }) => theme.colors.emerald['50']};
	background-color: ${({ theme }) => `${theme.colors.emerald['200']}aa`};
	border: ${({ theme }) => `2px solid ${theme.colors.emerald['400']}`};
	border-radius: 5px;
	transition: border 0.1s ease-in-out, scale 0.1s ease-in-out;

	&:hover {
		scale: 1.1;
		border: ${({ theme }) => `2px solid ${theme.colors.emerald['200']}`};
	}
	&:active {
		scale: 0.8;
	}
`;
