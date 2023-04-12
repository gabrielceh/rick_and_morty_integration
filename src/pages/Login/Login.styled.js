import styled from 'styled-components';

export const LoginPageContainerStyled = styled.div`
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
