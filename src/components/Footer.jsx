import styled from 'styled-components';

function Footer() {
	return (
		<FooterStyled>
			<FooterContainerStyled>
				<h4>Rick and Morty Project</h4>
				<span>Made by Gabriel Cervantes Hurtado</span>
			</FooterContainerStyled>
		</FooterStyled>
	);
}

export default Footer;

const FooterStyled = styled.footer`
	width: 100%;
	padding: 1rem 0;
	background-color: ${({ theme }) => theme.colors.yellow['200']};
`;

const FooterContainerStyled = styled.div`
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
