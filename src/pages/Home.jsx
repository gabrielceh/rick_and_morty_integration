import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import imageHome from '../assets/images/Rick_and_Morty_Logop.png';

function Home({ login }) {
	return (
		<HomeContainerStyled>
			<img
				src={imageHome}
				alt='Rick and Morty Logo'
			/>
			<LoginForm login={login} />
		</HomeContainerStyled>
	);
}

export default Home;

const HomeContainerStyled = styled.div`
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;

	& img {
		max-width: 300px;
		min-width: 200px;
	}

	@media (${({ theme }) => theme.screenSize.laptop}) {
		& img {
			max-width: 500px;
			min-width: 350px;
		}
	}
`;
