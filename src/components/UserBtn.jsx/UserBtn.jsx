import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { ROUTES_NAMES } from '../../helpers/routesName';
import { logout } from '../../redux/actions/actionUser';
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

	const handleOpen = () => {
		if (isOpen) {
			closeModal();
		} else {
			openModal();
		}
	};

	const handleLogout = () => {
		dispatch(logout());
		navigate(ROUTES_NAMES.LOGIN, { replace: true });
	};

	return (
		<UserHeaderContainer>
			<UserBtnStyled onClick={handleOpen}>
				<AvatarICon />
			</UserBtnStyled>

			{isOpen && (
				<MenuUserHeader>
					<MenuUserITems>{user.user.email}</MenuUserITems>
					<MenuUserITems onClick={handleLogout}>Logout</MenuUserITems>
				</MenuUserHeader>
			)}
		</UserHeaderContainer>
	);
}

export default UserBtn;
