import styled from 'styled-components';
import imageError from '../assets/images/rick-morty_error.png';

function Page404() {
	return (
		<Page404ContainerStyled>
			<Image404Styled
				src={imageError}
				alt='Error 404 rick and morty'
			/>
			<h1>404</h1>
			<p>Oops! That page can’t be found.</p>
		</Page404ContainerStyled>
	);
}

export default Page404;

const Page404ContainerStyled = styled.div`
	width: 90%;
	margin: 0 auto;
	margin-top: 2rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	height: 50vh;

	& h1,
	& p {
		text-align: center;
	}

	& h1 {
		font-size: ${({ theme }) => theme.fontSize.xl_4};
	}

	& p {
		font-size: ${({ theme }) => theme.fontSize.base};
	}
`;

const Image404Styled = styled.img`
	width: 95%;
	max-width: 500px;
	border-radius: 5%;

	animation-name: image404Frame;
	animation-iteration-count: infinite;
	animation-duration: 10s;
	animation-timing-function: ease-in-out;

	@keyframes image404Frame {
		0% {
			translate: 0px 0px;
			box-shadow: ${({ theme }) =>
				`0px 0px 0px 0px ${theme.colors.emerald['500']}`};
		}

		50% {
			translate: 0px -20px;
			box-shadow: ${({ theme }) =>
				`0px 0px 20px 2px ${theme.colors.emerald['600']}`};
		}

		100% {
			translate: 0px -0px;
			box-shadow: ${({ theme }) =>
				`0px 0px 0px 0px ${theme.colors.emerald['500']}`};
		}
	}
`;
