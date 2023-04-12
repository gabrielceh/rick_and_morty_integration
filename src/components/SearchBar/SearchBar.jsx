import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useModal } from '../../hooks/useModal';
import { BtnOutlineStyled } from '../../styled/BtnStyles.style';
import {
	BtnCloseModalStyled,
	ButtonSearchStyled,
	SearchInputStyled,
	SearchModalBoxStyled,
	SearchModalContainer,
} from './SearchBar.styled';

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
