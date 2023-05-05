import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { ROUTES_NAMES } from '../../helpers/routesName';
import { logout } from '../../redux/actions/actionUser';
import { restartCharacter } from '../../redux/actions/actionCharacters';
import { restartFav } from '../../redux/actions/actionsFavorites';
import {
	MenuUserHeader,
	MenuUserITems,
	UserBtnStyled,
	UserHeaderContainer,
} from './UserBtn.styled';
import AvatarICon from '../icons/AvatarICon';

function UserBtn() {
	const [isOpen, openModal, closeModal] = useModal();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();

	const body = document.querySelector('body');

	body.addEventListener('click', (event) => {
		closeModal();
	});

	const handleOpen = (event) => {
		event.stopPropagation();
		if (isOpen) {
			closeModal();
		} else {
			openModal();
		}
	};

	const handleLogout = (event) => {
		event.stopPropagation();
		dispatch(logout());
		dispatch(restartCharacter());
		dispatch(restartFav());
		navigate(ROUTES_NAMES.LOGIN, { replace: true });
	};

	return (
		<UserHeaderContainer>
			<UserBtnStyled onClick={handleOpen}>
				<AvatarICon />
			</UserBtnStyled>

			{isOpen && (
				<MenuUserHeader onClick={(event) => event.stopPropagation()}>
					<MenuUserITems>{user.user.email}</MenuUserITems>
					<MenuUserITems onClick={handleLogout}>Logout</MenuUserITems>
				</MenuUserHeader>
			)}
		</UserHeaderContainer>
	);
}

export default UserBtn;
