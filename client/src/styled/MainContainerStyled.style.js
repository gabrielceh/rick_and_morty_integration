import styled from 'styled-components';

export const MainContainerStyled = styled.main`
	margin-top: 100px;
	width: 100%;

	@media ${({ theme }) => theme.screenSize.laptop} {
		& {
			margin: 0 auto;
			margin-top: 100px;
		}
	}
`;
