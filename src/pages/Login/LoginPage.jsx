import LoginForm from '../../components/LoginForm/LoginForm';
import imageHome from '../../assets/images/Rick_and_Morty_Logop.png';
import { LoginPageContainerStyled } from './Login.styled';

function LoginPage({ login }) {
	return (
		<LoginPageContainerStyled>
			<img
				src={imageHome}
				alt='Rick and Morty Logo'
			/>
			<LoginForm login={login} />
		</LoginPageContainerStyled>
	);
}

export default LoginPage;
