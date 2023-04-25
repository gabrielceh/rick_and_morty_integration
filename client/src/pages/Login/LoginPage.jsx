import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES_NAMES } from '../../helpers/routesName';

import LoginForm from '../../components/LoginForm/LoginForm';
import imageHome from '../../assets/images/Rick_and_Morty_Logop.png';
import { LoginPageContainerStyled } from './Login.styled';
import { useEffect } from 'react';

function LoginPage() {
	const user = useSelector((state) => state.user);

	const navigate = useNavigate();

	useEffect(() => {
		if (user.access && user.user) {
			navigate(ROUTES_NAMES.HOME, { replace: true });
		}
	}, [user]);

	return (
		<LoginPageContainerStyled>
			<img
				src={imageHome}
				alt='Rick and Morty Logo'
			/>
			<LoginForm />
		</LoginPageContainerStyled>
	);
}

export default LoginPage;
