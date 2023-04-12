import styled from 'styled-components';

export const SelectSectionStyled = styled.section`
	position: sticky;
	top: 83px;
	z-index: 5;
	padding: 1rem;
	background-color: ${({ theme }) => theme.body};
	width: 100%;
	margin: 0 auto;
	margin-bottom: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	transition: background-color 0.5s ease-in-out;

	@media ${({ theme }) => theme.screenSize.tablet} {
		& {
			flex-direction: row;
			width: 80%;
		}
	}
`;
