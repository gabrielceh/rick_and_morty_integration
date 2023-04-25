import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addCharacterById } from '../../redux/actions/actionCharacters';
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
import SearchICon from '../icons/SearchIcon';

function SearchBar({ onModalClose }) {
	const [id, setId] = useState('');
	const { darkMode } = useContext(DarkModeContext);

	const [isOpen, openModal, closeModal] = useModal();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (event) => {
		setId(event.target.value);
	};

	const handleClick = (event) => {
		dispatch(addCharacterById(id));
		setId('');
		closeModal();
		onModalClose();
		navigate('/home');
	};

	return (
		<>
			<BtnOutlineStyled
				color='yellow'
				onClick={openModal}
				width='50px'>
				<SearchICon />
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
						placeholder='Example: 170'
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
