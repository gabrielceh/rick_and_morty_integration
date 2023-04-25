import styled from 'styled-components';

export const FooterStyled = styled.footer`
	width: 100%;
	padding: 1rem 0;
	background-color: ${({ theme }) => theme.colors.yellow['200']};
`;

export const FooterContainerStyled = styled.div`
	width: 90%;
	margin: 0 auto;
	color: ${({ theme }) => theme.colors.slate['900']};
	display: flex;
	flex-direction: column;
	/* justify-content:center: */
	align-items: center;
	gap: 1rem;

	& h4::selection,
	& span::selection {
		background-color: ${({ theme }) => theme.colors.emerald['500']};
		color: ${({ theme }) => theme.colors.yellow['100']};
	}
`;
