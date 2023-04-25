import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { MainContainerStyled } from '../styled/MainContainerStyled.style';

function PublicRoutes() {
	const user = useSelector((state) => state.user);

	if (user.access && user.user) {
		return <Navigate to='/home' />;
	}

	return (
		<>
			<MainContainerStyled>
				<Outlet />
			</MainContainerStyled>
		</>
	);
}

export default PublicRoutes;
