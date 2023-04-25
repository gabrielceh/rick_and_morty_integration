import styled from 'styled-components';

export const GridCards = styled.section`
	min-height: 50vh;
	margin: 0 auto;
	width: 100%;
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	justify-content: center;
	justify-items: center;
	gap: 2rem;
`;

export const NoCardsMessageStyle = styled.h2`
	margin: 3rem auto;
	width: 80%;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.xl_2};
	color: ${({ theme }) => theme.colors.slate['500']};

	&::selection {
		color: ${({ theme }) => theme.colors.emerald['600']};
		background-color: ${({ theme }) => theme.colors.yellow['300']};
	}
`;
