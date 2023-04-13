import styled from 'styled-components';

export const SelectContainerStyled = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.2rem;

	@media ${({ theme }) => theme.screenSize.tablet} {
		& {
			width: 90%;
			width: 40%;
		}
	}
`;

export const SelectBasicStyled = styled.select`
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	cursor: pointer;
	height: 3rem;
	width: 100%;
	padding: 0.2rem 0.8rem;
	border: none;
	outline: none;
	font-family: 'ChakraPetch';
	font-size: ${({ theme }) => theme.fontSize.sm};
	text-align: center;
	background-color: ${({ theme }) => theme.body};
	color: ${({ theme }) => theme.text};
	border-bottom: ${({ theme }) => `1px solid ${theme.colors.slate['500']}`};
	font-weight: 600;
	transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;

	&:hover {
		box-shadow: ${({ theme }) => `0px 0px 3px ${theme.colors.emerald['400']}`};
	}
	&:focus {
		box-shadow: ${({ theme }) => `0px 0px 7px ${theme.colors.emerald['400']}`};
	}

	@media ${({ theme }) => theme.screenSize.tablet} {
		& {
			font-size: ${({ theme }) => theme.fontSize.base};
		}
	}
`;

export const LabelBasicStyled = styled.label`
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: ${({ theme }) => theme.colors.slate['500']};
`;
