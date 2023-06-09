import styled from 'styled-components';

export const Page404ContainerStyled = styled.div`
	margin: 0 auto;
	margin-top: 2rem;

	& .page-404-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		height: 50vh;
	}

	& .page-404-container h1,
	& .page-404-container p {
		text-align: center;
	}

	& .page-404-container h1 {
		font-size: ${({ theme }) => theme.fontSize.xl_4};
	}

	& .page-404-container p {
		font-size: ${({ theme }) => theme.fontSize.base};
	}
`;

export const Image404Styled = styled.img`
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
