import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import { MainContainerStyled } from '../styled/MainContainerStyled.style';

function ProtectedRoutes() {
	const user = useSelector((state) => state.user);

	if (!user.access && user.user === null) {
		return <Navigate to='/' />;
	}

	return (
		<>
			<Header />
			<MainContainerStyled>
				<Outlet />
			</MainContainerStyled>
		</>
	);
}

export default ProtectedRoutes;
